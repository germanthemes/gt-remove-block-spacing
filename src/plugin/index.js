/**
 * External dependencies
 */
import classnames from 'classnames';
const { assign } = lodash;

/**
 * WordPress dependencies
 */
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorAdvancedControls } = wp.blockEditor;
const { BaseControl, ToggleControl } = wp.components;
const { __ } = wp.i18n;
const { addFilter } = wp.hooks;
const { hasBlockSupport } = wp.blocks;

/**
 * Internal dependencies
 */
import './editor.scss';
import './style.scss';

const withInspectorControl = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const hasCustomClassName = hasBlockSupport( props.name, 'customClassName', true );

		if ( hasCustomClassName && props.isSelected ) {
			const {
				gtRemoveMarginTop,
				gtRemoveMarginBottom,
			} = props.attributes;

			return (
				<Fragment>
					<BlockEdit { ...props } />

					<InspectorAdvancedControls>

						<BaseControl
							label={ __( 'Remove Block Spacing', 'gt-remove-block-spacing' ) }
							className="gt-remove-block-spacing-control"
						>
							<ToggleControl
								label={ __( 'Remove top margin?', 'gt-remove-block-spacing' ) }
								checked={ !! gtRemoveMarginTop }
								onChange={ () => props.setAttributes( { gtRemoveMarginTop: ! gtRemoveMarginTop } ) }
							/>

							<ToggleControl
								label={ __( 'Remove bottom margin?', 'gt-remove-block-spacing' ) }
								checked={ !! gtRemoveMarginBottom }
								onChange={ () => props.setAttributes( { gtRemoveMarginBottom: ! gtRemoveMarginBottom } ) }
							/>
						</BaseControl>

					</InspectorAdvancedControls>
				</Fragment>
			);
		}

		return <BlockEdit { ...props } />;
	};
}, 'withInspectorControl' );
addFilter( 'editor.BlockEdit', 'gt-remove-block-spacing/inspector-control', withInspectorControl );

function addAttribute( settings ) {
	if ( hasBlockSupport( settings, 'customClassName', true ) ) {
		settings.attributes = assign( settings.attributes, {
			gtRemoveMarginTop: {
				type: 'boolean',
				default: false,
			},
			gtRemoveMarginBottom: {
				type: 'boolean',
				default: false,
			},
		} );
	}

	return settings;
}
addFilter( 'blocks.registerBlockType', 'gt-remove-block-spacing/attributes', addAttribute );

function addSaveProps( extraProps, blockType, attributes ) {
	if ( hasBlockSupport( blockType, 'customClassName', true ) && attributes.gtRemoveMarginTop ) {
		extraProps.className = classnames( extraProps.className, 'gt-remove-margin-top' );
	}

	if ( hasBlockSupport( blockType, 'customClassName', true ) && attributes.gtRemoveMarginBottom ) {
		extraProps.className = classnames( extraProps.className, 'gt-remove-margin-bottom' );
	}

	return extraProps;
}
addFilter( 'blocks.getSaveContent.extraProps', 'gt-remove-block-spacing/save-props', addSaveProps );

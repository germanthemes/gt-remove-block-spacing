<?php
/*
Plugin Name: GT Remove Block Spacing
Plugin URI: https://germanthemes.de/en/plugins/gt-remove-block-spacing/
Description: Remove top and bottom spacing for any Gutenberg block.
Author: GermanThemes
Author URI: https://germanthemes.de/en/
Version: 1.0
Text Domain: gt-remove-block-spacing
Domain Path: /languages/
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

GT Remove Block Spacing
Copyright(C) 2020, germanthemes.de - support@germanthemes.de
*/

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main GermanThemes_Remove_Block_Margin Class
 *
 * @package GT Remove Block Spacing
 */
class GermanThemes_Remove_Block_Margin {
	/**
	 * Setup the Plugin
	 *
	 * @return void
	 */
	static function setup() {

		// Enqueue Block Styles.
		add_action( 'enqueue_block_assets', array( __CLASS__, 'enqueue_block_scripts' ) );

		// Enqueue Block Scripts and Styles for Gutenberg Editor.
		add_action( 'enqueue_block_editor_assets', array( __CLASS__, 'enqueue_block_editor_scripts' ) );
	}

	/**
	 * Enqueue Block Styles
	 *
	 * Used in Frontend and Backend
	 *
	 * @return void
	 */
	static function enqueue_block_scripts() {
		wp_enqueue_style(
			'gt-remove-block-spacing',
			plugins_url( 'assets/css/gt-remove-block-spacing.css', __FILE__ ),
			array(),
			'20200505'
		);
	}

	/**
	 * Enqueue Scripts and Styles for Blocks
	 *
	 * Used in Backend in Gutenberg Editor only
	 *
	 * @return void
	 */
	static function enqueue_block_editor_scripts() {
		// Enqueue GT Remove Block Spacing in Gutenberg.
		wp_enqueue_script(
			'gt-remove-block-spacing',
			plugins_url( 'assets/js/gt-remove-block-spacing.js', __FILE__ ),
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
			'20200505'
		);

		// Enqueue Editor Stylesheet for GT Remove Block Spacing.
		wp_enqueue_style(
			'gt-remove-block-spacing-editor',
			plugins_url( 'assets/css/gt-remove-block-spacing-editor.css', __FILE__ ),
			array( 'wp-edit-blocks' ),
			'20200505'
		);
	}
}

// Run Plugin.
GermanThemes_Remove_Block_Margin::setup();

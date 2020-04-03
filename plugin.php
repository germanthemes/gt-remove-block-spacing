<?php
/*
Plugin Name: GT Remove Block Margin
Plugin URI: https://germanthemes.de/en/plugins/gt-remove-block-margin/
Description: Add description
Author: GermanThemes
Author URI: https://germanthemes.de/en/
Version: 1.0
Text Domain: gt-remove-block-margin
Domain Path: /languages/
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

GT Remove Block Margin
Copyright(C) 2020, germanthemes.de - support@germanthemes.de
*/

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main GermanThemes_Remove_Block_Margin Class
 *
 * @package GT Remove Block Margin
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
			'gt-remove-block-margin',
			plugins_url( 'assets/css/gt-remove-block-margin.css', __FILE__ ),
			array(),
			'20200403'
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
		// Enqueue GT Remove Block Margin in Gutenberg.
		wp_enqueue_script(
			'gt-remove-block-margin',
			plugins_url( 'assets/js/gt-remove-block-margin.js', __FILE__ ),
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
			'20200403'
		);

		// Enqueue Editor Stylesheet for GT Remove Block Margin.
		wp_enqueue_style(
			'gt-remove-block-margin-editor',
			plugins_url( 'assets/css/gt-remove-block-margin-editor.css', __FILE__ ),
			array( 'wp-edit-blocks' ),
			'20200403'
		);
	}
}

// Run Plugin.
GermanThemes_Remove_Block_Margin::setup();

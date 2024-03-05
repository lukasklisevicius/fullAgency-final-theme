</main>

<?php do_action('tailpress_content_end'); ?>

</div>

<?php do_action('tailpress_content_after'); ?>

<footer id="colophon" class="site-footer py-8 mx-8 z-10 relative font-futuraL" role="contentinfo">
	<?php do_action('tailpress_footer'); ?>

	<div class=" text-gray-500">
		<?php
		$lines = get_field('lines', 'option');
		if ($lines) {
			foreach ($lines as $line) {
		?>
				<p class=""><?php echo $line['line']; ?></p>
		<?php
			}
		}
		?>
		&copy; <?php echo date_i18n('Y'); ?> - <?php echo get_bloginfo('name'); ?>
	</div>
</footer>

</div>

<?php wp_footer(); ?>

</body>

</html>
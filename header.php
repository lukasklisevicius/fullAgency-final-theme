<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta property=’og:title’ content='FULL Agency' />
	<meta property=’og:image’ content='wp-content/themes/example-theme/resources/icon/Screenshot.png' />
	<!-- TYPE BELOW IS PROBABLY: 'website' or 'article' or look on https://ogp.me/#types -->
	<meta property="og:type" content='website' />
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
	<link rel="icon" type="image/x-icon" href="wp-content/themes/example-theme/resources/icon/image1.png">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
	<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
	<?php wp_head(); ?>
</head>

<body <?php body_class('text-white antialiased overflow-x-hidden overflow-y-scroll no-scrollbar font-futuraL  tracking-[2px]'); ?>>
	<?php $bg = get_field('background');
	if ($bg) {
	?>
		<div style="background-image:url('<?php echo $bg['url'] ?>'); background-position:top; background-size:cover;background-repeat:no-repeat;" class="w-full h-screen fixed z-0"></div>
	<?php
	}
	?>





	<?php do_action('tailpress_site_before'); ?>


	<div id="page" class="min-h-screen flex flex-col z-10">

		<?php do_action('tailpress_header'); ?>

		<header>
			<?php if (is_front_page()) { ?>
				<?php $logo = get_field('first_logo');
				if ($logo) {
				?>
					<div id="header" class="w-full h-screen flex items-center justify-center relative">
						<img class="w-full md:w-3/4 lg:w-2/5" src="<?php echo $logo['url']; ?>" alt="">
					</div>
				<?php
				}
				?>


	</div>
<?php } ?>
<div id="sticky" class="w-full mx-auto relative z-10 " <?php if ($bg) {
														?> style="<?php echo "background-image:url('" . $bg['url'] . "'); background-position:top; background-repeat:no-repeat;" ?>" <?php
																																	} ?>>

	<div class="lg:flex justify-center lg:items-center py-6">
		<div class="flex justify-center items-center">


			<div class="lg:hidden">
				<a href="#" aria-label="Toggle navigation" id="primary-menu-toggle">
					<svg viewBox="0 0 20 20" class="inline-block w-6 h-6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<g stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd">
							<g id="icon-shape">
								<path d="M0,3 L20,3 L20,5 L0,5 L0,3 Z M0,9 L20,9 L20,11 L0,11 L0,9 Z M0,15 L20,15 L20,17 L0,17 L0,15 Z" id="Combined-Shape"></path>
							</g>
						</g>
					</svg>
				</a>
			</div>
		</div>

		<?php
		wp_nav_menu(
			array(
				'container_id'    => 'primary-menu',
				'container_class' => 'hidden mt-4 p-8 lg:mt-0 lg:p-0 lg:bg-transparent lg:block duration-300',
				'menu_class'      => 'lg:flex lg:-mx-4',
				'theme_location'  => 'primary',
				'li_class'        => 'md:mx-24 lg:mx-24 lowercase font-futuraR font-bold text-white opacity-20 hover:opacity-100 duration-300 text-2xl',
				'fallback_cb'     => false,
			)
		);
		?>
	</div>
</div>
<script>
	$(document).ready(function() {
		$(window).scroll(function() {
			var distanceFromTop = $(document).scrollTop();
			if (distanceFromTop >= $('#header').height()) {
				$('#sticky').addClass('fixed');
			} else {
				$('#sticky').removeClass('fixed ');
			}
		});
	});
</script>
</header>

<div id="content" class="site-content flex-grow z-10">


	<?php do_action('tailpress_content_start'); ?>

	<main>
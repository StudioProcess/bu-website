<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' — '; } ?><?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
      <link href="<?php echo get_template_directory_uri(); ?>/_/img/icons/favicon.png" rel="shortcut icon">
      <link href="<?php echo get_template_directory_uri(); ?>/_/img/icons/touch.png" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>

		<!-- wrapper -->
		<div class="wrapper">

			<!-- header -->
			<header class="header clear" role="banner">
				<div class="header-content">
					<!-- <div class="logo-navigation"><img src="http://urbanek.studio/wp-content/uploads/2016/08/logo-u.png" width="50px"></div> -->
					
					<div class="logo-navigation"><a href="<?php site_url(); ?>"><img src="https://urbanek.studio/wp-content/uploads/2020/03/logo_anim_thumb2_small.gif"></a></div>
					<!-- nav -->
					<nav class="nav" role="navigation">
						<?php html5blank_nav(); ?>
					</nav>
					<!-- /nav -->
				</div>

			</header>
			<!-- /header -->

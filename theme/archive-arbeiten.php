<?php get_header(); ?>

<nav class="categories">
	<?php wp_nav_menu( array('menu' => 'category-menu') ); ?>
</nav>

	<main role="main">
		<!-- section -->
		<section class="work-home">

			<?php if (have_posts()): while (have_posts()) : the_post(); ?>
			<?php get_template_part('card-work') ?>
			<?php endwhile; endif; ?>

		</section>
		<!-- /section -->
	</main>

<?php get_footer(); ?>

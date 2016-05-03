<?php get_header(); ?>

<nav class='categories'>
	<ul>
	<?php $terms = get_terms( array('taxonomy' => 'category', 'exclude' => '1') );
		foreach ($terms as $term) {
			echo '<li><a href="' . get_term_link($term) . '">' . $term->name . '</a></li>';
		}
	?>
	</ul>
</nav>

	<main role="main">
		<!-- section -->
		<section>

			<?php if (have_posts()): while (have_posts()) : the_post(); ?>
			<?php get_template_part('card-work') ?>
			<?php endwhile; endif; ?>

		</section>
		<!-- /section -->
	</main>

<?php get_footer(); ?>

<?php get_header(); ?>
	<main role="main">

		<?php if ( is_home() ): ?>
		<section class="feature">
			<!-- <div class="info">
				<div class="info-half"><?php echo prcs_get_post_content(516); ?></div>
			</div> -->
			<div class="reel"><?php echo prcs_get_reel(); ?></div>
		</section>
		<div class="featured-works-home">Ausgewählte Arbeiten</div>
		<?php endif; ?>

		<!-- section -->
		<section class="work-home">
			<?php //PrcsSync::sync(); // TODO: this takes too long
			// $social_posts = prcs_get_social_posts(40);
			// $num_social = sizeof($social_posts);
			// $num_works = $wp_query->found_posts;
			// $idx = 0;

			if (have_posts()): while (have_posts()) : the_post();

				// insert social posts if appropriate
				// if( is_home() ){
				// 	while ( prcs_should_insert_social($idx++, $num_social, $num_works) ) {
				// 		$prcs = current($social_posts);
				// 		if ($prcs->service == 'twitter') include( locate_template('card-twitter.php') );
				// 		else if ($prcs->service == 'instagram') include( locate_template('card-instagram.php') );
				// 		next($social_posts); // advance pointer
				// 	}
				// }

				// insert next work
				get_template_part('card-work');


			endwhile; endif; ?>

		</section>
		<!-- /section -->
	</main>

<?php get_footer(); ?>

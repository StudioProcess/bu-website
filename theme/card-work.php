   <div class="work-container">
      <!-- article  -->
      <article class="work" id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

      <!-- post thumbnail -->
      <a href="<?php the_permalink(); ?>">
      <?php if ( has_post_thumbnail()) : // Check if thumbnail exists ?>
        <?php the_post_thumbnail('post-thumbnail'); ?>
      <?php else: ?>
        <img src="<?php echo get_template_directory_uri(); ?>/_/img/missing-thumbnail-1280x720.png">
      <?php endif; ?>
      </a>
      <!-- /post thumbnail -->

      <!-- post title -->
      <hgroup class="titles">
        <?php $title_extra = types_render_field('title-extra', array()); ?>
        <h2 class="title"><a href="<?php the_permalink(); ?>"><?php the_title(); if (!empty($title_extra)) echo " <span class='title-extra'> {$title_extra}</span>"; ?></a></h2>
        <h3 class="subtitle"><?php echo types_render_field('subtitle', array()); ?></h3>
      </hgroup>
      <!-- /post title -->

      </article>
      <!-- /article -->
   </div>

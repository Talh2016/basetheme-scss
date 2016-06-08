<?php
/**
 * The template for displaying Archive pages.
 *
*/
<?php get_header(); ?>

<main id="main" class="site-main" role="main">
	<div class="container">
<?php if ( have_posts() ) : ?>

	<header class="page-header">
		<?php
			the_archive_title( '<h1 class="page-title">', '</h1>' );
			the_archive_description( '<div class="taxonomy-description">', '</div>' );
		?>
	</header><!-- .page-header -->

	<?php
	// Start the Loop.
	while ( have_posts() ) : the_post();

		/*
		 * Include the Post-Format-specific template for the content.
		 * If you want to override this in a child theme, then include a file
		 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
		 */
		get_template_part( 'template-parts/content', get_post_format() );

	// End the loop.
	endwhile;

	// Previous/next page navigation.
	the_posts_pagination( array(
		'prev_text'          => __( 'Previous page', 'basetheme-scss' ),
		'next_text'          => __( 'Next page', 'basetheme-scss' ),
		'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'basetheme-scss' ) . ' </span>',
	) );

// If no content, include the "No posts found" template.
else :
	get_template_part( 'template-parts/content', 'none' );

endif;
?>
	<?php get_sidebar(); ?>
	</div>
</main><!-- .site-main -->

<?php get_footer(); ?>

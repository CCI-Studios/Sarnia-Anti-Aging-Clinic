  <?php

/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup themeable
 */
?>

  <div id="page-wrapper">
<div>
  <div>
    <div id="header">
      <div>
        <div>
           <?php print render($page['header']); ?>
           <div id="top-menu">
        <?php print theme('links__system_main_menu', 
        array('links' => $main_menu, 'attributes' => array('id' => 'main-menu', 'class' => array( 'inline', 'clearfix')) )); 
        $block_search = module_invoke('search','block_view','form'); 
                   ?> <div class="block-search-form">  <?php print render($block_search['content']); ?> </div>
        </div>
        </div>
      </div>
    </div> <!-- /#header -->

    <div id="main-wrapper">
      <div>
        <div>
           <div id="banner">
              <?php print render($page['banner']); ?>
            
          </div>  
           <div id="learnmore"></div>   
          <div id="white-region">
              <?php print render($page['white-region1']); ?>
          </div>

          <div id="content">
             <div class="inner-content">
                <a id="main-content"></a>
                <?php print render($title_prefix); ?>
                <?php print render($title_suffix); ?>
                <?php                
                 
                if (arg(0) == 'taxonomy') :
                  $termid = arg(2);
                  $parents = taxonomy_get_parents_all($termid);
                  $parent_tid = max(array_keys($parents));  
                  $parent_term_name = $parents[$parent_tid]->name;?>
                 <div class="title" id="page-title-root"><h1 class="title" ><?php print $parent_term_name; ?></h1></div>

                 <?php endif; ?>

                <?php if (arg(0) != 'taxonomy') : if ($title): ?><div class="title" id="page-title"><h1 class="title" ><?php print $title; ?></h1></div><?php endif; ?><?php endif; ?>
               
                <?php print $messages; ?>
                <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
                <?php print render($page['help']); ?>
                <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
                 <?php  
                    ?>
                <div class="sidebar">
                     <?php  if (arg(0) == 'taxonomy' && arg(1) == 'term' && arg(2)):   
                       $block = module_invoke('menu','block_view','menu-footer-menu'); 
                      print render($block['content']); endif;
                  ?>
                </div>
                <div class="content-right">
                <?php if (arg(0) == 'taxonomy') : ?>
                    <div class="title"><h2><?php print $title; ?></h2>
                    </div>
                  <?php endif; ?>
                <?php print render($page['content']); ?>
              </div>
            </div>
          </div> <!-- /#content --> 
           <div id="black-region">
              <?php print render($page['black-region']); ?>
          </div>
           <?php if (drupal_is_front_page()) :?>
           <div id="service-region">
               
                  <?php 
                    print render($page['service-block']); ?>
            
          </div>
            <?php endif ;?>
         

           <div id="service-block">
             
           </div>
           <div id="white-region">
              <?php print render($page['white-region']); ?>
           </div>
              <div id="bottom-black">
              <?php print render($page['bottom-black']); ?>
           </div>


      </div>
    </div> <!-- /#main, /#main-wrapper -->

   

    <div id="contactlink"></div>
    <div id="footer">
      <div>
        <div id="footer-inner">
                     <div id="search-bottom">
        <?php 
      
                   ?> <div class="block-search-form">  <?php print render($block_search['content']); ?> <span><a href="https://www.facebook.com/SarniaAntiAgingClinic" target="_blank" class="fb">Facebook</a></span></div>
        </div>
        <?php print render($page['footer']); ?>
      
       <!--<div id="bottom-menu">
        <?php print theme('links__system_main_menu', 
        array('links' => $main_menu, 'attributes' => array('id' => 'main-menu', 'class' => array( 'inline', 'clearfix')) )); ?>
        </div> -->
        <div class="cci-website"><p>Website by <a href="http://ccistudios.com" target="_blank"><img src="/sites/all/themes/SarniaAntiAging/images/ccilogo.png"></a></p>
        </div>
      </div>
        
      </div>
    </div> <!-- /#footer -->
  </div>
</div>
</div> <!-- /#page-wrapper -->

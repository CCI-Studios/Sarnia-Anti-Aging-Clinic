<?php
// Add some cool text to the search block form
function SarniaAntiAging_form_alter(&$form, &$form_state, $form_id) {
  
    // HTML5 placeholder attribute
 if ($form_id == 'search_block_form') {
    // HTML5 placeholder attribute
    $form['search_block_form']['#attributes']['placeholder'] = t('Search');
  }
 
}
?>
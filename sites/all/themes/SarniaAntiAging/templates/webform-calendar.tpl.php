<?php
 $idKey = str_replace('_', '-', $component['form_key']); 
?>
<div id="webform-datepicker-text">
<input type="text" placeholder="Appointment Date" id="edit-submitted-<?php print $idKey ?>" class="form-text <?php print implode(' ', $calendar_classes); ?>" alt="<?php print t('Open popup calendar'); ?>" title="<?php print t('Open popup calendar'); ?>" />
</div>

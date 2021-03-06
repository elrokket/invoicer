/**
 * @file
 * Attaches the behaviors for the invoicer_invoice module.
 */

(function ($, Drupal, drupalSettings) {

    'use strict';

    /**
     * @type {Drupal~behavior}
     *
     * @prop {Drupal~behaviorAttach} attach
     *   Adds behaviors to the field storage add form.
     */
    Drupal.behaviors.invoicerInvoice = {
        attach: function (context) {

            function getSiblingsValues($element){
                var $parent = jQuery($element.closest("td"));

                var $values = {
                    "quantity": $parent.find(".quantity").val(),
                    // @todo: get values of all fields.
                    // You may need to add some extra classes.
                };

                return $values;
            }

            $(".quantity").change(function () {
                var $siblings = getSiblingsValues($(this));

                // @todo: calculate Base price and total price.
            });

            // @todo: implement the amount.change, vat.change base-price.change and total price.change.
        }
    };

})(jQuery, Drupal, drupalSettings);

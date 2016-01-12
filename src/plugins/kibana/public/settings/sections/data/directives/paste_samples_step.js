var modules = require('ui/modules');
var template = require('plugins/kibana/settings/sections/data/directives/paste_samples_step.html');

modules.get('apps/settings')
  .directive('pasteSamplesStep', function () {
    return {
      template: template,
      scope: {
        samples: '='
      }
    };
  });


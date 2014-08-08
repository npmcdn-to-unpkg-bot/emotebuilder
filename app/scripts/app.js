/* global EmoteInfo, EmoteInfoSerializer, EmoteExpander, $ */
'use strict';

/**
 * @ngdoc overview
 * @name emotebuilderApp
 * @description
 * # emotebuilderApp
 *
 * Main module of the application.
 */


angular
    .module('emotebuilderApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch'
    ])
    .controller('MainCtrl', function ($scope, $http) {

        $scope.emoteInfo = new EmoteInfo();
        $scope.emoteInfo.emoteName = 'ierage';

        $scope.spinOptions = EmoteInfo.spinOptions;
        $scope.speedOptions = EmoteInfo.speedOptions;
        $scope.coloringOptions = EmoteInfo.coloringOptions;

        $scope.emoteInfoSerializer = new EmoteInfoSerializer();

        // populate with a few inline so the page can render one by default
        $scope.emoteData = [
            {
                'apng_url': 'http://backstage.berrytube.tv/marminator/images/a/-UJ20dLxrm_8r4kr.png',
                'background-image': 'http://a.thumbs.redditmedia.com/-UJ20dLxrm_8r4kr.png',
                'height': 140,
                'names': ['welliwashungryandwhenyoucravehands'],
                'sr': 'marmemotes',
                'tags': ['lyra'],
                'width': 126
            },
            {
                'apng_url': 'http://backstage.berrytube.tv/marminator/images/a/1ERLWojxsUO7nFQT.png',
                'background-image': 'http://a.thumbs.redditmedia.com/1ERLWojxsUO7nFQT.png',
                'height': 140,
                'names': ['doodoodooluna'],
                'sr': 'marmemotes',
                'tags': ['luna', ''],
                'width': 121
            },
            {
                'apng_url': 'http://backstage.berrytube.tv/marminator/images/a/84ozl2WMmiYp6Euf.png',
                'background-image': 'http://a.thumbs.redditmedia.com/84ozl2WMmiYp6Euf.png',
                'height': 140,
                'names': ['ivyrage', 'ierage'],
                'sr': 'marmemotes',
                'tags': ['oc', ''],
                'width': 200
            },
            {
                'apng_url': 'http://backstage.berrytube.tv/marminator/images/a/E1FnMA0PMGL9qnwx.png',
                'background-image': 'http://a.thumbs.redditmedia.com/E1FnMA0PMGL9qnwx.png',
                'height': 140,
                'names': ['keystrokeguitar'],
                'sr': 'marmemotes',
                'tags': ['oc', 'berrytube'],
                'width': 118
            }
        ];
        $scope.expander = new EmoteExpander($scope.emoteData);

        $scope.escapeHtml = function (str) {
            var div = document.createElement('div');
            div.appendChild(document.createTextNode(str));
            return div.innerHTML;
        };

        $scope.populateEmoteData = function () {
            console.log('making call to load emote data');
            $http.get('//berrymotes.com/assets/berrymotes_json_data.json')
                .then(function(res) {
                    $scope.emoteData = res.data;
                    $scope.expander = new EmoteExpander($scope.emoteData, $scope.options);
                    console.log('loaded ' + $scope.emoteData.length + ' emotes');
                });
        };

        $scope.serializeEmoteInfo = function () {
            var afterSerialize = $('#afterSerialize');
            var serialized = $scope.emoteInfoSerializer.serialize($scope.emoteInfo);
            afterSerialize.text(serialized);
            afterSerialize.val(serialized);

            var afterElement = $('#after-expansion');
            var afterEscapedElement = $('#after-expansion-escaped');
            var beforeText = serialized;
            console.log('running expansion on', beforeText);
            var afterHtml = $scope.expander.expand(beforeText);

            // TODO: get rid of this stupid hack and figure out how to get jquery or angular to do this for us
            afterHtml = afterHtml.replace(/; animation: ([^;]+);/g, '; animation: $1; -webkit-animation: $1;');

            afterElement.html(afterHtml);
            var escapedHtml = $scope.escapeHtml(afterHtml);
            afterEscapedElement.html(escapedHtml);
        };

        $scope.serializeEmoteInfo();
        $scope.populateEmoteData();
    });

define(['angular', 'components/navigation/navigation-def'], function (angular, navigationModule) {

    'use strict';

    navigationModule.factory('NavigationTestService', ['$state', function ($state) {
        return {
            getNavigationItems: function () {
                var items = [];

                items.push({link: 'bl2.items', label: 'navigation.items'});

                items.push({
                    label: 'navigation.weapons.title',
                    group: 'bl2.weapons',
                    items: [
                        {link: 'bl2.weapons.list', label: 'navigation.weapons.list'},
                        {link: 'bl2.weapons.create', label: 'navigation.weapons.create'}
                    ]
                });

                items.push({
                    label: 'navigation.shields.title',
                    group: 'bl2.shields',
                    items: [
                        {link: 'bl2.shields.list', label: 'navigation.shields.list'},
                        {link: 'bl2.shields.create', label: 'navigation.shields.create'}
                    ]
                });

                items.push({
                    label: 'navigation.grenadeMods.title',
                    group: 'bl2.grenadeMods',
                    items: [
                        {link: 'bl2.grenadeMods.list', label: 'navigation.grenadeMods.list'},
                        {link: 'bl2.grenadeMods.create', label: 'navigation.grenadeMods.create'}
                    ]
                });

                items.push({
                    label: 'navigation.classMods.title',
                    group: 'bl2.classMods',
                    items: [
                        {link: 'bl2.classMods.list', label: 'navigation.classMods.list'},
                        {link: 'bl2.classMods.create', label: 'navigation.classMods.create'}
                    ]
                });

                items.push({
                    label: 'navigation.artifacts.title',
                    group: 'bl2.artifacts',
                    items: [
                        {link: 'bl2.artifacts.list', label: 'navigation.artifacts.list'},
                        {link: 'bl2.artifacts.create', label: 'navigation.artifacts.create'}
                    ]
                });

                items.push({
                    label: 'navigation.admin.title',
                    group: 'bl2.admin',
                    items: [
                        {link: 'bl2.admin.rarities', label: 'navigation.admin.rarities'},
                        {link: 'bl2.admin.manufacturers', label: 'navigation.admin.manufacturers'},
                        {link: 'bl2.admin.damageTypes', label: 'navigation.admin.damageTypes'},
                        {link: 'bl2.admin.users', label: 'navigation.admin.users'},
                        {link: 'bl2.admin.files', label: 'navigation.admin.files'}
                    ]
                });

                items.push({link: 'bl2.logout', label: 'navigation.logout'});

                return items;
            }
        };

    }]);

});

define(['angular', 'class-mod/module-def'], function (angular, classModModule) {

    'use strict';

    classModModule.factory('CharacterClassService', ['$state', 'Restangular', function ($state, Restangular) {
        var resourceUrl = 'character-class';

        return {
            showList: function () {
                $state.go('^');
            },

            list: function () {
                // TODO
                return [
                    {id: 1, name: 'Zer0', classRequirement: 'Assassin'},
                    {id: 2, name: 'Axton', classRequirement: 'Commando'},
                    {id: 3, name: 'Salvador', classRequirement: 'Gunzerker'},
                    {id: 4, name: 'Maya', classRequirement: 'Siren'},
                    {id: 5, name: 'Gaige', classRequirement: 'Mechromancer'},
                    {id: 6, name: 'Krieg', classRequirement: 'Psycho'}
                ];
                //return Restangular.all(resourceUrl).getList();
            },

            create: function (characterClass) {
                return Restangular.all(resourceUrl).post(characterClass);
            },

            read: function (id) {
                return Restangular.one(resourceUrl, id).get();
            },

            update: function (characterClass) {
                return characterClass.put();
            },

            remove: function (characterClass) {
                return characterClass.remove();
            },

            /**
             * Gets the skills for the given character
             * @param character
             */
            getSkills: function (character) {
                var skills;
                switch (character.classRequirement) {
                    //case '':
                    //
                    //    break;
                    default:
                        skills = {
                            subTrees: [
                                {
                                    title: 'Gunlust',
                                    color: 'green',
                                    borderColor: '#5AC94B',
                                    tiers: [
                                        {
                                            left: {
                                                name: 'Locked and Loaded',
                                                levels: 5,
                                                image: 'locked-and-loaded.png',
                                                text: 'Reloading your gun gives you +5% Fire Rate per level for a short time.'
                                            },
                                            right: {
                                                name: 'Quick Draw',
                                                levels: 5,
                                                image: 'quick-draw.png',
                                                text: '+7% Weapon Swap Speed and +2% Critical Hit Damage per level.'
                                            }
                                        },
                                        {
                                            left: {
                                                name: 'I\'m Your Huckleberry',
                                                levels: 5,
                                                image: 'huckleberry.png',
                                                text: '+3% Damage and Reload Speed per level with pistols.'
                                            },
                                            right: {
                                                name: 'All I Need is One',
                                                levels: 5,
                                                image: 'all-i-need.png',
                                                text: 'Swapping weapons causes your next shot fired to deal +8% damage per level.'
                                            }
                                        },
                                        {
                                            left: {
                                                name: 'Divergent Likeness',
                                                levels: 5,
                                                image: 'divergent-likeness.png',
                                                text: '+6% Damage when Gunzerking with two of the same type of guns, +6% Accuracy when Gunzerking with two different types of guns per level.'
                                            },
                                            middle: {
                                                name: 'Auto-Load',
                                                levels: 1,
                                                image: 'auto-load.png',
                                                text: 'Killing an enemy Instantly Reloads all of the guns that you have equipped that are not currently in your hands. Swapping guns after Auto-Load has reloaded a gun triggers Locked & Loaded.'
                                            },
                                            right: {
                                                name: 'Money Shot',
                                                levels: 5,
                                                image: 'money-shot.png',
                                                text: 'The last bullet fired from any gun does +8% damage per level per magazine size, up to +80% damage per level.'
                                            }
                                        },
                                        {
                                            left: {
                                                name: 'Lay Waste',
                                                levels: 5,
                                                image: 'lay-waste.png',
                                                killSkill: true,
                                                text: 'Kill Skill. Killing an enemy gives +8% Fire Rate and +5% Critical Hit Damage with Guns per level for a short time.'
                                            },
                                            middle: {
                                                name: 'Down Not Out',
                                                levels: 1,
                                                image: 'down-not-out.png',
                                                text: 'You can Gunzerk while in Fight for Your Life.'
                                            }
                                        },
                                        {
                                            middle: {
                                                name: 'Keep It Piping Hot',
                                                levels: 5,
                                                image: 'piping-hot.png',
                                                text: 'While Gunzerking is in the process of cooling down you gain +5% Gun Damage, +6% Melee Damage, and +5% Grenade Damage per level.'
                                            }
                                        },
                                        {
                                            middle: {
                                                name: 'No Kill Like Overkill',
                                                levels: 1,
                                                image: 'overkill.png',
                                                text: 'When you kill an enemy you gain a bonus to Gun Damage equal to the amount of excess damage you dealt to the enemy you just killed.'
                                            }
                                        }
                                    ]
                                },
                                {
                                    title: 'Rampage',
                                    color: 'blue',
                                    borderColor: '#53A3AD',
                                    tiers: [
                                        {
                                            left: {
                                                name: 'Inconceivable',
                                                levels: 5,
                                                image: 'inconceivable.png',
                                                text: 'Up to 10% chance per level for shots not to consume ammo depending on how low your health and shields are.'
                                            },
                                            right: {
                                                name: 'Filled to the Brim',
                                                levels: 5,
                                                image: 'brim.png',
                                                text: '+5% Magazine Capacity and +3% Ammunition Capacity per level for all weapon types.'
                                            }
                                        },
                                        {
                                            left: {
                                                name: 'All in the Reflexes',
                                                levels: 5,
                                                image: 'reflexes.png',
                                                text: '+5% Reload Speed and +4% Melee Damage per level.'
                                            },
                                            right: {
                                                name: 'Last Longer',
                                                levels: 5,
                                                image: 'last-longer.png',
                                                text: '+3 seconds Gunzerking duration per level.'
                                            }
                                        },
                                        {
                                            left: {
                                                name: 'I\'m Ready Already',
                                                levels: 5,
                                                image: 'ready-already.png',
                                                text: '+5% Gunzerking Cooldown Rate.'
                                            },
                                            middle: {
                                                name: 'Steady as She Goes',
                                                levels: 1,
                                                image: 'steady.png',
                                                text: '+80% Recoil Reduction and 30% chance to improve Accuracy on hit when Gunzerking.'
                                            },
                                            right: {
                                                name: '5 Shots or 6',
                                                levels: 5,
                                                image: '5-shots-or-6.png',
                                                text: 'Grants a 5% chance per level to add an extra round of ammunition when firing instead of expending ammunition.'
                                            }
                                        },
                                        {
                                            left: {
                                                name: 'Yippee Ki Yay',
                                                levels: 5,
                                                image: 'yippee-ki-yay.png',
                                                text: 'Increases the duration of Gunzerking by 0.6s per level every time an enemy is killed while Gunzerking.'
                                            },
                                            middle: {
                                                name: 'Double Your Fun',
                                                levels: 1,
                                                image: 'double-your-fun.png',
                                                text: 'Throwing a grenade while Gunzerking throws two grenades instead of one. The second grenade doesn\'t cost ammo.'
                                            }
                                        },
                                        {
                                            middle: {
                                                name: 'Get Some',
                                                levels: 5,
                                                image: 'get-some.png',
                                                text: 'Shooting an enemy decreases Gunzerking cooldown by 0.6 second per level. Has a cooldown of 3 seconds.'
                                            }
                                        },
                                        {
                                            middle: {
                                                name: 'Keep Firing...',
                                                levels: 1,
                                                image: 'keep-firing.png',
                                                text: 'While Gunzerking, you gain up to +88% Fire Rate and +25% Reload Speed depending on how long you hold down the trigger.'
                                            }
                                        }
                                    ]
                                },
                                {
                                    title: 'Brawn',
                                    color: 'red',
                                    borderColor: '#A93E3D',
                                    tiers: [
                                        {
                                            left: {
                                                name: 'Hard to Kill',
                                                levels: 5,
                                                image: 'hard-to-kill.png',
                                                text: '+4% Maximum Health and regenerate 0.1% of your Maximum Health per second per level.'
                                            },
                                            right: {
                                                name: 'Incite',
                                                levels: 5,
                                                image: 'incite.png',
                                                text: 'Taking damage gives +6% Movement Speed and +5% Reload Speed for a few seconds.'
                                            }
                                        },
                                        {
                                            left: {
                                                name: 'Asbestos',
                                                levels: 5,
                                                image: 'asbestos.png',
                                                text: '-8% Negative Status Effect Duration per level.'
                                            },
                                            right: {
                                                name: 'I\'m the Juggernaut',
                                                levels: 5,
                                                image: 'juggernaut.png',
                                                text: 'Kill Skill. Killing an enemy gives +4% Damage Reduction for a short time.',
                                                killsSkill: true

                                            }
                                        },
                                        {
                                            left: {
                                                name: 'Ain\'t Got Time to Bleed',
                                                levels: 5,
                                                image: 'no-time-to-bleed.png',
                                                text: 'While Gunzerking you regenerate up to 0.8% of your Maximum Health per second per level depending on how low your health is.'
                                            },
                                            middle: {
                                                name: 'Fistful of Hurt',
                                                levels: 1,
                                                image: 'fistful-of-hurt.png',
                                                text: 'Melee Override. Throw a heavy punch dealing massive damage and knockback. Has a cooldown of 15 seconds.'
                                            },
                                            right: {
                                                name: 'Out of Bubblegum',
                                                levels: 5,
                                                image: 'bubblegum.png',
                                                text: '+7% Fire Rate per level when shield is depleted.'
                                            }
                                        },
                                        {
                                            right: {
                                                name: 'Bus That Can\'t Slow Down',
                                                levels: 5,
                                                image: 'bus-cant-slow-down.png',
                                                text: '+10% Movement Speed per level while Gunzerking.'
                                            },
                                            middle: {
                                                name: 'Just Got Real',
                                                levels: 5,
                                                image: 'just-got-real.png',
                                                text: 'Up to +8% Gun Damage per level depending on how low your health is.'
                                            }
                                        },
                                        {
                                            middle: {
                                                name: 'Sexual Tyrannosaurus',
                                                levels: 5,
                                                image: 'tyrannosaurus.png',
                                                text: 'Taking damage gives +0.4% Health Regeneration per level for 5 seconds. This effect does not stack.'
                                            }
                                        },
                                        {
                                            middle: {
                                                name: 'Come At Me Bro',
                                                levels: 1,
                                                image: 'come-at-me.png',
                                                text: 'While Gunzerking, you can press [Action Skill] to taunt your enemies into attacking you. You instantly heal to Full Health and gain massive damage reduction for a few seconds.'
                                            }
                                        }
                                    ]
                                }
                            ]
                        };
                }

                return skills;
            }
        };

    }])
    ;

})
;
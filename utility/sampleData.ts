export const sampleData = {
  AppPresentation_queryAppListV2: [
    {
      __typename: "AppPresentation_QueryAppListResponse",
      barItems: [
        {
          __typename: "AppPresentation_MapBarItem",
          surfaces: ["LIST"],
          buttonText: {
            __typename: "AppPresentation_LocalizedString",
            string: "Map",
            debugValueKey: null,
          },
          trackingKey:
            '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_barItems_0","sn":"Attractions","biv":"Map"}',
          trackingTitle: "MapBarItemData",
        },
        {
          __typename: "AppPresentation_ListBarItem",
          surfaces: ["MAP"],
          buttonText: {
            __typename: "AppPresentation_LocalizedString",
            string: "List",
            debugValueKey: null,
          },
          trackingKey:
            '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_barItems_1","sn":"Attractions","biv":"List"}',
          trackingTitle: "ListBarItemData",
        },
        {
          __typename: "AppPresentation_FilterBarItem",
          surfaces: ["LIST", "MAP"],
          buttonText: {
            __typename: "AppPresentation_LocalizedString",
            string: "Filters",
            debugValueKey: null,
          },
          trackingKey:
            '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_barItems_2","sn":"Attractions","biv":"Filter_primary"}',
          trackingTitle: "FilterBarItemData",
        },
      ],
      container: {
        __typename: "AppPresentation_ListResponseContainer",
        navTitle: null,
        searchTitle: null,
        searchGhostText: {
          __typename: "AppPresentation_LocalizedString",
          string: "Map area",
          debugValueKey: null,
        },
        showMapToggle: true,
        plusMarketingBanner: null,
        route: {
          __typename: "Routing_Route",
          fragment: null,
          page: "AppList",
          url: "/AppList-g293928-a_contentType.restaurant-a_sort.AVAILABILITY-a_sortAlgo.desc-zfg10591-a_isList.true.html",
          nonCanonicalUrl:
            "/AppList-g293928-a_contentType.restaurant-a_sort.AVAILABILITY-a_sortAlgo.desc-zfg10591-a_isList.true.html",
          typedParams: {
            __typename: "Routing_AppListParameters",
            contentType: "restaurant",
            geoId: 293928,
            isCollectionView: null,
            isList: true,
            isMap: null,
            isNearby: null,
            nearLocationId: null,
            nearLocationType: null,
            pagee: null,
            sort: "AVAILABILITY",
            sortOrder: "desc",
            routingFilters: [
              {
                __typename: "Routing_Filters",
                id: "establishment",
                value: ["10591"],
              },
            ],
          },
        },
        datePicker: null,
      },
      quickLinks: null,
      filters: {
        __typename: "AppPresentation_FilterResponse",
        showAllText: {
          __typename: "AppPresentation_LocalizedString",
          string: "Show 39 results",
          debugValueKey: null,
        },
        availableFilterGroups: [
          {
            __typename: "AppPresentation_StandardFilterGroup",
            name: "Filters",
            groupType: "StandardFilterGroup",
            tooltip: null,
            filters: [
              {
                __typename: "AppPresentation_MultiValueFilter",
                trackingKey:
                  '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_filterGroups_0_0","lid":293928,"fn":"establishment","sn":"Attractions"}',
                trackingTitle: "APSMultiValueFilter_establishment",
                title: "Establishment Type",
                name: "establishment",
                surfaces: ["LIST", "MAP"],
                tooltip: null,
                values: [
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 39,
                    value: "10591",
                    isSelected: true,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Restaurants",
                        tagId: 10591,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Restaurants filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Restaurants filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 6,
                    value: "9900",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Coffee & Tea",
                        tagId: 9900,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Coffee & Tea filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Coffee & Tea filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 3,
                    value: "9909",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Dessert",
                        tagId: 9909,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Dessert filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Dessert filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "16556",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Quick Bites",
                        tagId: 16556,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Quick Bites filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Quick Bites filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "9901",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Bakeries",
                        tagId: 9901,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Bakeries filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Bakeries filter ",
                      debugValueKey: null,
                    },
                  },
                ],
              },
              {
                __typename: "AppPresentation_MultiValueFilter",
                trackingKey:
                  '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_filterGroups_0_1","lid":293928,"fn":"option","sn":"Attractions"}',
                trackingTitle: "APSMultiValueFilter_option",
                title: "Restaurant Features",
                name: "option",
                surfaces: ["LIST", "MAP"],
                tooltip: null,
                values: [
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 22,
                    value: "10852",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Seating",
                        tagId: 10852,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Seating filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Seating filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 21,
                    value: "16547",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Table Service",
                        tagId: 16547,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Table Service filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Table Service filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 18,
                    value: "10602",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Reservations",
                        tagId: 10602,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Reservations filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Reservations filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 15,
                    value: "10862",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Serves Alcohol",
                        tagId: 10862,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Serves Alcohol filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Serves Alcohol filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 11,
                    value: "10870",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Free Wifi",
                        tagId: 10870,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Free Wifi filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Free Wifi filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 11,
                    value: "11780",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Accepts Credit Cards",
                        tagId: 11780,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Accepts Credit Cards filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Accepts Credit Cards filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 10,
                    value: "10601",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Takeout",
                        tagId: 10601,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Takeout filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Takeout filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 9,
                    value: "10864",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Wine and Beer",
                        tagId: 10864,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Wine and Beer filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Wine and Beer filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 8,
                    value: "10603",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Outdoor Seating",
                        tagId: 10603,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Outdoor Seating filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Outdoor Seating filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 8,
                    value: "10854",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Parking Available",
                        tagId: 10854,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Parking Available filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Parking Available filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 8,
                    value: "10863",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Full Bar",
                        tagId: 10863,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Full Bar filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Full Bar filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 7,
                    value: "10860",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Highchairs Available",
                        tagId: 10860,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Highchairs Available filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Highchairs Available filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 7,
                    value: "10861",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Wheelchair Accessible",
                        tagId: 10861,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Wheelchair Accessible filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Wheelchair Accessible filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 7,
                    value: "10868",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Digital Payments",
                        tagId: 10868,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Digital Payments filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Digital Payments filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 5,
                    value: "10857",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Valet Parking",
                        tagId: 10857,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Valet Parking filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Valet Parking filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 5,
                    value: "10865",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Accepts American Express",
                        tagId: 10865,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Accepts American Express filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Accepts American Express filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 5,
                    value: "10866",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Accepts Mastercard",
                        tagId: 10866,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Accepts Mastercard filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Accepts Mastercard filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 5,
                    value: "10867",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Accepts Visa",
                        tagId: 10867,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Accepts Visa filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Accepts Visa filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 3,
                    value: "10600",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Delivery",
                        tagId: 10600,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Delivery filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Delivery filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 3,
                    value: "10855",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Street Parking",
                        tagId: 10855,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Street Parking filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Street Parking filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 3,
                    value: "10869",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Cash Only",
                        tagId: 10869,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Cash Only filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Cash Only filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "10612",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Buffet",
                        tagId: 10612,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Buffet filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Buffet filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "10702",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Private Dining",
                        tagId: 10702,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Private Dining filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Private Dining filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "10856",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Validated Parking",
                        tagId: 10856,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Validated Parking filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Validated Parking filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "10858",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Free off-street parking",
                        tagId: 10858,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Free off-street parking filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Free off-street parking filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10859",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Television",
                        tagId: 10859,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Television filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Television filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10871",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Accepts Discover",
                        tagId: 10871,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Accepts Discover filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Accepts Discover filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "20989",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Live Music",
                        tagId: 20989,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Live Music filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Live Music filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "20990",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Waterfront",
                        tagId: 20990,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Waterfront filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Waterfront filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "21907",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Gift Cards Available",
                        tagId: 21907,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Gift Cards Available filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Gift Cards Available filter ",
                      debugValueKey: null,
                    },
                  },
                ],
              },
              {
                __typename: "AppPresentation_MultiValueFilter",
                trackingKey:
                  '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_filterGroups_0_2","lid":293928,"fn":"meal","sn":"Attractions"}',
                trackingTitle: "APSMultiValueFilter_meal",
                title: "Meals",
                name: "meal",
                surfaces: ["LIST", "MAP"],
                tooltip: null,
                values: [
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 12,
                    value: "10597",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Breakfast",
                        tagId: 10597,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Breakfast filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Breakfast filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 7,
                    value: "10606",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Brunch",
                        tagId: 10606,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Brunch filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Brunch filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 23,
                    value: "10598",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Lunch",
                        tagId: 10598,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Lunch filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Lunch filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 22,
                    value: "10599",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Dinner",
                        tagId: 10599,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Dinner filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Dinner filter ",
                      debugValueKey: null,
                    },
                  },
                ],
              },
              {
                __typename: "AppPresentation_MultiValueFilter",
                trackingKey:
                  '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_filterGroups_0_3","lid":293928,"fn":"price","sn":"Attractions"}',
                trackingTitle: "APSMultiValueFilter_price",
                title: "Price",
                name: "price",
                surfaces: ["LIST", "MAP"],
                tooltip: null,
                values: [
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 10,
                    value: "10953",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_SimpleTextFilterValue",
                      text: "$",
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Cheap Eats filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Cheap Eats filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 21,
                    value: "10955",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_SimpleTextFilterValue",
                      text: "$$ - $$$",
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Mid-range filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Mid-range filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10954",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_SimpleTextFilterValue",
                      text: "$$$$",
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Fine Dining filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Fine Dining filter ",
                      debugValueKey: null,
                    },
                  },
                ],
              },
              {
                __typename: "AppPresentation_MultiValueFilter",
                trackingKey:
                  '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_filterGroups_0_4","lid":293928,"fn":"openNow","sn":"Attractions"}',
                trackingTitle: "APSMultiValueFilter_openNow",
                title: "Open Now",
                name: "openNow",
                surfaces: ["LIST", "MAP"],
                tooltip: null,
                values: [
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: null,
                    value: "true",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_SimpleTextFilterValue",
                      text: "Open Now",
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Disable filter: Open Now",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Enable filter: Open Now",
                      debugValueKey: null,
                    },
                  },
                ],
              },
              {
                __typename: "AppPresentation_MultiValueFilter",
                trackingKey:
                  '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_filterGroups_0_5","lid":293928,"fn":"cuisine","sn":"Attractions"}',
                trackingTitle: "APSMultiValueFilter_cuisine",
                title: "Cuisine Type",
                name: "cuisine",
                surfaces: ["LIST", "MAP"],
                tooltip: null,
                values: [
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 18,
                    value: "10659",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Asian",
                        tagId: 10659,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Asian filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Asian filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 17,
                    value: "10675",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Vietnamese",
                        tagId: 10675,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Vietnamese filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Vietnamese filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 6,
                    value: "10643",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Seafood",
                        tagId: 10643,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Seafood filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Seafood filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 5,
                    value: "5473",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Japanese",
                        tagId: 5473,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Japanese filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Japanese filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 5,
                    value: "10648",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "International",
                        tagId: 10648,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove International filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply International filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 4,
                    value: "10671",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Fusion",
                        tagId: 10671,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Fusion filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Fusion filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 3,
                    value: "10640",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Bar",
                        tagId: 10640,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Bar filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Bar filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 3,
                    value: "10646",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Fast Food",
                        tagId: 10646,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Fast Food filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Fast Food filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 3,
                    value: "10653",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Sushi",
                        tagId: 10653,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Sushi filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Sushi filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "4617",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Italian",
                        tagId: 4617,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Italian filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Italian filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "5379",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Chinese",
                        tagId: 5379,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Chinese filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Chinese filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "10642",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Cafe",
                        tagId: 10642,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Cafe filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Cafe filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "10654",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "European",
                        tagId: 10654,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove European filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply European filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "10661",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Korean",
                        tagId: 10661,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Korean filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Korean filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "10679",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Healthy",
                        tagId: 10679,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Healthy filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Healthy filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "10683",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Gastropub",
                        tagId: 10683,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Gastropub filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Gastropub filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "10700",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Soups",
                        tagId: 10700,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Soups filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Soups filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "5086",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "French",
                        tagId: 5086,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove French filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply French filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10346",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Indian",
                        tagId: 10346,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Indian filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Indian filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10621",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Brew Pub",
                        tagId: 10621,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Brew Pub filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Brew Pub filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10641",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Pizza",
                        tagId: 10641,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Pizza filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Pizza filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10651",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Barbecue",
                        tagId: 10651,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Barbecue filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Barbecue filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10660",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Thai",
                        tagId: 10660,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Thai filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Thai filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10669",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Contemporary",
                        tagId: 10669,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Contemporary filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Contemporary filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10714",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Singaporean",
                        tagId: 10714,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Singaporean filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Singaporean filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10722",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Salvadoran",
                        tagId: 10722,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Salvadoran filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Salvadoran filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10749",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "South American",
                        tagId: 10749,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove South American filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply South American filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10755",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Hong Kong",
                        tagId: 10755,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Hong Kong filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Hong Kong filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10769",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Israeli",
                        tagId: 10769,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Israeli filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Israeli filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "22047",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Indigenous",
                        tagId: 22047,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Indigenous filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Indigenous filter ",
                      debugValueKey: null,
                    },
                  },
                ],
              },
              {
                __typename: "AppPresentation_MultiValueFilter",
                trackingKey:
                  '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_filterGroups_0_6","lid":293928,"fn":"dish","sn":"Attractions"}',
                trackingTitle: "APSMultiValueFilter_dish",
                title: "Dishes",
                name: "dish",
                surfaces: ["LIST", "MAP"],
                tooltip: null,
                values: [
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 7,
                    value: "10645",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Noodle",
                        tagId: 10645,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Noodle filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Noodle filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 6,
                    value: "16554",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Salad",
                        tagId: 16554,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Salad filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Salad filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 6,
                    value: "20752",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Beef",
                        tagId: 20752,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Beef filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Beef filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 4,
                    value: "10893",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Crab",
                        tagId: 10893,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Crab filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Crab filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 4,
                    value: "19953",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Pho",
                        tagId: 19953,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Pho filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Pho filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 4,
                    value: "20699",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Prawns",
                        tagId: 20699,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Prawns filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Prawns filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 4,
                    value: "21275",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Cakes",
                        tagId: 21275,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Cakes filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Cakes filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 3,
                    value: "10915",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Lobster",
                        tagId: 10915,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Lobster filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Lobster filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 3,
                    value: "10922",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Oyster",
                        tagId: 10922,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Oyster filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Oyster filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 3,
                    value: "10937",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Shrimp",
                        tagId: 10937,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Shrimp filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Shrimp filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 3,
                    value: "21324",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Fish",
                        tagId: 21324,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Fish filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Fish filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "9911",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Juice & Smoothies",
                        tagId: 9911,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Juice & Smoothies filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Juice & Smoothies filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "16555",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Pancakes",
                        tagId: 16555,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Pancakes filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Pancakes filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "20547",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Salmon",
                        tagId: 20547,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Salmon filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Salmon filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "21022",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Duck",
                        tagId: 21022,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Duck filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Duck filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "21285",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Fried rice",
                        tagId: 21285,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Fried rice filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Fried rice filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "21320",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Sashimi",
                        tagId: 21320,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Sashimi filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Sashimi filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "21326",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Pork",
                        tagId: 21326,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Pork filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Pork filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10896",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Dim Sum",
                        tagId: 10896,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Dim Sum filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Dim Sum filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10898",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Dumplings",
                        tagId: 10898,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Dumplings filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Dumplings filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10907",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Burger",
                        tagId: 10907,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Burger filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Burger filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10917",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Mandarin Duck",
                        tagId: 10917,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Mandarin Duck filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Mandarin Duck filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10925",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Peking Duck",
                        tagId: 10925,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Peking Duck filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Peking Duck filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "11722",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Ramen",
                        tagId: 11722,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Ramen filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Ramen filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "19959",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Eggs Benedict",
                        tagId: 19959,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Eggs Benedict filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Eggs Benedict filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "20029",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Chili",
                        tagId: 20029,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Chili filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Chili filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "20114",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Chili Crab",
                        tagId: 20114,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Chili Crab filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Chili Crab filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "20181",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Curry",
                        tagId: 20181,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Curry filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Curry filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "20542",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Scallops",
                        tagId: 20542,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Scallops filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Scallops filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "20556",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Clams",
                        tagId: 20556,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Clams filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Clams filter ",
                      debugValueKey: null,
                    },
                  },
                ],
              },
              {
                __typename: "AppPresentation_EnumeratedValueFilter",
                trackingKey:
                  '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_filterGroups_0_7","lid":293928,"fn":"minRating","sn":"Attractions"}',
                trackingTitle: "APSEnumeratedValueFilter_minRating",
                name: "minRating",
                surfaces: ["LIST", "MAP"],
                title: "Traveler rating",
                tooltip: null,
                values: [
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 8,
                    value: "50",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_BubbleRatingFilterValue",
                      minimumRatingValue: 50,
                    },
                    selectedAccessibilityString: null,
                    unselectedAccessibilityString: null,
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 28,
                    value: "40",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_BubbleRatingFilterValue",
                      minimumRatingValue: 40,
                    },
                    selectedAccessibilityString: null,
                    unselectedAccessibilityString: null,
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 33,
                    value: "30",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_BubbleRatingFilterValue",
                      minimumRatingValue: 30,
                    },
                    selectedAccessibilityString: null,
                    unselectedAccessibilityString: null,
                  },
                ],
              },
              {
                __typename: "AppPresentation_MultiValueFilter",
                trackingKey:
                  '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_filterGroups_0_8","lid":293928,"fn":"diet","sn":"Attractions"}',
                trackingTitle: "APSMultiValueFilter_diet",
                title: "Dietary Restrictions",
                name: "diet",
                surfaces: ["LIST", "MAP"],
                tooltip: null,
                values: [
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 15,
                    value: "10665",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Vegetarian Friendly",
                        tagId: 10665,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Vegetarian Friendly filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Vegetarian Friendly filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 12,
                    value: "10697",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Vegan Options",
                        tagId: 10697,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Vegan Options filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Vegan Options filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 8,
                    value: "10992",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Gluten Free Options",
                        tagId: 10992,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Gluten Free Options filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Gluten Free Options filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 1,
                    value: "10751",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Halal",
                        tagId: 10751,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Halal filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Halal filter ",
                      debugValueKey: null,
                    },
                  },
                ],
              },
              {
                __typename: "AppPresentation_MultiValueFilter",
                trackingKey:
                  '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_filterGroups_0_9","lid":293928,"fn":"style","sn":"Attractions"}',
                trackingTitle: "APSMultiValueFilter_style",
                title: "Good for",
                name: "style",
                surfaces: ["LIST", "MAP"],
                tooltip: null,
                values: [
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 15,
                    value: "10604",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Families with children",
                        tagId: 10604,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Families with children filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Families with children filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 8,
                    value: "10605",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Business meetings",
                        tagId: 10605,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Business meetings filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Business meetings filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 8,
                    value: "10609",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Large groups",
                        tagId: 10609,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Large groups filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Large groups filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 7,
                    value: "10607",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Special occasions",
                        tagId: 10607,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Special occasions filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Special occasions filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 7,
                    value: "11777",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Kids",
                        tagId: 11777,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Kids filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Kids filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 5,
                    value: "10610",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Scenic view",
                        tagId: 10610,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Scenic view filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Scenic view filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 5,
                    value: "10614",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Romantic",
                        tagId: 10614,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Romantic filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Romantic filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 4,
                    value: "10613",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Local cuisine",
                        tagId: 10613,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Local cuisine filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Local cuisine filter ",
                      debugValueKey: null,
                    },
                  },
                  {
                    __typename: "AppPresentation_EnumeratedValueWithCount",
                    count: 2,
                    value: "10608",
                    isSelected: false,
                    object: {
                      __typename: "AppPresentation_TagFilterValue",
                      tag: {
                        __typename: "Tag_TagInformationV2",
                        localizedName: "Bar scene",
                        tagId: 10608,
                      },
                    },
                    selectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Remove Bar scene filter",
                      debugValueKey: null,
                    },
                    unselectedAccessibilityString: {
                      __typename: "AppPresentation_LocalizedString",
                      string: "Apply Bar scene filter ",
                      debugValueKey: null,
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      availableSorts: [
        {
          __typename: "AppPresentation_Sort",
          isAscending: false,
          isSelected: false,
          name: "BEST_NEARBY",
          surfaces: ["LIST"],
          trackingKey:
            '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_sorts_0","lid":293928,"sortn":"BEST_NEARBY","sn":"Attractions"}',
          trackingTitle: "WrapperSortOption_BEST_NEARBY",
          title: {
            __typename: "AppPresentation_LocalizedString",
            string: "Best nearby",
            debugValueKey: null,
          },
          tooltipV2: {
            __typename: "AppPresentation_Tooltip",
            icon: "info",
            labelText: {
              __typename: "AppPresentation_LocalizedString",
              string: "Best nearby",
              debugValueKey: null,
            },
            popUpText: {
              __typename: "AppPresentation_LocalizedString",
              string:
                "We rank these hotels, restaurants, and attractions by balancing reviews from our members with how close they are to this location.",
              debugValueKey: null,
            },
            dialog: {
              __typename: "AppPresentation_BorderlessButtonDialog",
              dialogType: "BorderlessButtonDialog",
              title: null,
              content: {
                __typename: "AppPresentation_HtmlString",
                htmlString:
                  "We rank these hotels, restaurants, and attractions by balancing reviews from our members with how close they are to this location.",
              },
              buttonV2: null,
            },
          },
        },
        {
          __typename: "AppPresentation_Sort",
          isAscending: false,
          isSelected: true,
          name: "POPULARITY",
          surfaces: ["LIST"],
          trackingKey:
            '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_sorts_1","lid":293928,"sortn":"POPULARITY","sn":"Attractions"}',
          trackingTitle: "WrapperSortOption_POPULARITY",
          title: {
            __typename: "AppPresentation_LocalizedString",
            string: "Traveler ranking",
            debugValueKey: null,
          },
          tooltipV2: null,
        },
        {
          __typename: "AppPresentation_Sort",
          isAscending: false,
          isSelected: false,
          name: "PROXIMITY",
          surfaces: ["LIST"],
          trackingKey:
            '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_sorts_2","lid":293928,"sortn":"PROXIMITY","sn":"Attractions"}',
          trackingTitle: "WrapperSortOption_PROXIMITY",
          title: {
            __typename: "AppPresentation_LocalizedString",
            string: "Distance to me",
            debugValueKey: null,
          },
          tooltipV2: {
            __typename: "AppPresentation_Tooltip",
            icon: "info",
            labelText: {
              __typename: "AppPresentation_LocalizedString",
              string: "Distance to me",
              debugValueKey: null,
            },
            popUpText: {
              __typename: "AppPresentation_LocalizedString",
              string: "Sorted by distance from your current location",
              debugValueKey: null,
            },
            dialog: {
              __typename: "AppPresentation_BorderlessButtonDialog",
              dialogType: "BorderlessButtonDialog",
              title: null,
              content: {
                __typename: "AppPresentation_HtmlString",
                htmlString: "Sorted by distance from your current location",
              },
              buttonV2: null,
            },
          },
        },
      ],
      datePickerConfig: null,
      sections: [
        {
          __typename: "AppPresentation_SortDisclaimerSection",
          tooltip: {
            __typename: "AppPresentation_HtmlStringWithTooltip",
            text: {
              __typename: "AppPresentation_HtmlString",
              htmlString:
                '39 places sorted by <span class="underline">traveler ranking</span>',
            },
            tooltip: {
              __typename: "AppPresentation_Tooltip",
              icon: "info",
              labelText: {
                __typename: "AppPresentation_LocalizedString",
                string: "Traveler ranking",
                debugValueKey: null,
              },
              popUpText: {
                __typename: "AppPresentation_LocalizedString",
                string:
                  "Highest rated restaurants on Tripadvisor, based on reviews.",
                debugValueKey: null,
              },
              dialog: {
                __typename: "AppPresentation_BorderlessButtonDialog",
                dialogType: "BorderlessButtonDialog",
                title: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "Traveler ranking",
                  debugValueKey: null,
                },
                content: {
                  __typename: "AppPresentation_HtmlString",
                  htmlString:
                    "Highest rated restaurants on Tripadvisor, based on reviews.",
                },
                buttonV2: null,
              },
            },
          },
          groupName: {
            __typename: "AppPresentation_LocalizedString",
            string: "Filters",
            debugValueKey: null,
          },
          clusterId: "EAT_STATIC",
          sectionType: "SortDisclaimerSection",
          stableDiffingType: "RestaurantSortDisclaimerSection_EAT_STATIC",
          trackingKey:
            '{"dt":"RESULT_SUMMARY","ik":"47d15468-ba0a-4074-a391-06c229ecaba6_0","sn":"Attractions"}',
          trackingTitle: "RestaurantSortDisclaimerSection_EAT_STATIC",
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_8886823f-dd9c-4c55-9c7c-6af263a2db22_EAT_0",
          trackingKey:
            '{"br":5.0,"rc":672,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_1","ctt":"LOCATION","pt":"restaurant","lid":1803465,"pir":1,"mid":593213892,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_8886823f-dd9c-4c55-9c7c-6af263a2db22_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":5.0,"rc":672,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_1","ctt":"LOCATION","pt":"restaurant","lid":1803465,"pir":1,"mid":593213892,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_8886823f-dd9c-4c55-9c7c-6af263a2db22",
            stableDiffingType:
              "RestaurantListCard_restaurant_8886823f-dd9c-4c55-9c7c-6af263a2db22",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "1. Feast",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • Seafood • International • Asian",
            },
            secondaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Open now",
            },
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: {
                __typename: "AppPresentation_BorderlessButton",
                commerceTrackingUrl: null,
                link: {
                  __typename: "AppPresentation_ExternalLink",
                  externalUrl:
                    "https://drive.google.com/drive/folders/1bAsPeTE2l_Sy2wxmtdKoWjz9gyZMnXOV?usp=sharing",
                  text: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Menu",
                    debugValueKey: null,
                  },
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View menu for Feast",
                    debugValueKey: null,
                  },
                  trackingContext: "server_menu",
                },
                variant: "PRIMARY",
              },
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "1803465",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 999,
                maxWidth: 1500,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5b/b9/c4/seafood-buffet.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 5,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "672",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=8886823f-dd9c-4c55-9c7c-6af263a2db22",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=8886823f-dd9c-4c55-9c7c-6af263a2db22",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "8886823f-dd9c-4c55-9c7c-6af263a2db22",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Feast",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_c12cdd2b-be09-4eba-9277-129bebb15c59_EAT_0",
          trackingKey:
            '{"br":5.0,"rc":501,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_2","ctt":"LOCATION","pt":"restaurant","lid":1803466,"pir":2,"mid":593224730,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_c12cdd2b-be09-4eba-9277-129bebb15c59_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":5.0,"rc":501,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_2","ctt":"LOCATION","pt":"restaurant","lid":1803466,"pir":2,"mid":593224730,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_c12cdd2b-be09-4eba-9277-129bebb15c59",
            stableDiffingType:
              "RestaurantListCard_restaurant_c12cdd2b-be09-4eba-9277-129bebb15c59",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "2. & More by Sheraton",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • Bar • Cafe • International",
            },
            secondaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Open now",
            },
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: {
                __typename: "AppPresentation_BorderlessButton",
                commerceTrackingUrl: null,
                link: {
                  __typename: "AppPresentation_ExternalLink",
                  externalUrl:
                    "https://drive.google.com/drive/folders/1x-rnMmknDopMO8UluLVEfuG3krfWAsR5?usp=sharing",
                  text: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Menu",
                    debugValueKey: null,
                  },
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View menu for & More by Sheraton",
                    debugValueKey: null,
                  },
                  trackingContext: "server_menu",
                },
                variant: "PRIMARY",
              },
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "1803466",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 999,
                maxWidth: 1500,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5b/e4/1a/more-by-sheraton.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 5,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "501",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=c12cdd2b-be09-4eba-9277-129bebb15c59",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=c12cdd2b-be09-4eba-9277-129bebb15c59",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "c12cdd2b-be09-4eba-9277-129bebb15c59",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for & More by Sheraton",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_1",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9_EAT_0",
          trackingKey:
            '{"br":4.5,"rc":754,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_3","ctt":"LOCATION","pt":"restaurant","lid":2233968,"pir":3,"mid":594281821,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.5,"rc":754,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_3","ctt":"LOCATION","pt":"restaurant","lid":2233968,"pir":3,"mid":594281821,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
            stableDiffingType:
              "RestaurantListCard_restaurant_aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "3. Altitude Rooftop Bar",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • Bar • European • Gastropub",
            },
            secondaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Open now",
            },
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: {
                __typename: "AppPresentation_BorderlessButton",
                commerceTrackingUrl: null,
                link: {
                  __typename: "AppPresentation_ExternalLink",
                  externalUrl:
                    "https://drive.google.com/drive/folders/1WdKNAHDXpBkF7L0KoG49Qi5_q1D00JiN?usp=sharing",
                  text: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Menu",
                    debugValueKey: null,
                  },
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View menu for Altitude Rooftop Bar",
                    debugValueKey: null,
                  },
                  trackingContext: "server_menu",
                },
                variant: "PRIMARY",
              },
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "2233968",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 999,
                maxWidth: 1500,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/6c/05/5d/altitude-rooftop-bar.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4.5,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "754",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Altitude Rooftop Bar",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_2",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_17998258-0a82-4fbe-9133-1a58ea9eb066_EAT_0",
          trackingKey:
            '{"br":4.5,"rc":2798,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_4","ctt":"LOCATION","pt":"restaurant","lid":8536569,"pir":5,"mid":196174187,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_17998258-0a82-4fbe-9133-1a58ea9eb066_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.5,"rc":2798,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_4","ctt":"LOCATION","pt":"restaurant","lid":8536569,"pir":5,"mid":196174187,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_17998258-0a82-4fbe-9133-1a58ea9eb066",
            stableDiffingType:
              "RestaurantListCard_restaurant_17998258-0a82-4fbe-9133-1a58ea9eb066",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "4. Skylight Nha Trang",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • Seafood • International • Fusion",
            },
            secondaryInfo: null,
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: {
                __typename: "AppPresentation_BorderlessButton",
                commerceTrackingUrl: null,
                link: {
                  __typename: "AppPresentation_ExternalLink",
                  externalUrl:
                    "https://drive.google.com/file/d/1pCvjwDhDMj3JY19gbJXJUqXHH0D8uIX4/view?usp=sharing",
                  text: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Menu",
                    debugValueKey: null,
                  },
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View menu for Skylight Nha Trang",
                    debugValueKey: null,
                  },
                  trackingContext: "server_menu",
                },
                variant: "PRIMARY",
              },
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "8536569",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 1349,
                maxWidth: 1800,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/b1/61/6b/360-of-nha-trang.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4.5,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "2,798",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=17998258-0a82-4fbe-9133-1a58ea9eb066",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=17998258-0a82-4fbe-9133-1a58ea9eb066",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "17998258-0a82-4fbe-9133-1a58ea9eb066",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Skylight Nha Trang",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_3",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_AdPlaceholderNative",
          trackingTitle: "AdPlaceholder_NATIVE",
          trackingKey:
            '{"adt":"NATIVE","ik":"47d15468-ba0a-4074-a391-06c229ecaba6_5","sn":"Attractions"}',
          stableDiffingType: "AdPlaceholder_NATIVE",
          clusterId: "AD_PLACEHOLDER_NATIVE",
          adUnitId: "/5349/ta.ta.com.s/as.vietnam.khanh_hoa.nha_trang",
          adSizes: ["FLUID", "_300x250"],
          targetingParams: [
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "country",
              values: ["293921"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "detail",
              values: ["0"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "geo",
              values: ["293928"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "hname",
              values: ["Nha_Trang"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "loctype",
              values: ["attractions"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "PageType",
              values: ["Attractions"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "platform",
              values: ["mobile_app"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "rd",
              values: ["com"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "region",
              values: ["1184689"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "pos",
              values: ["inline1"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "fluidType",
              values: ["mobile"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "correlator",
              values: ["3805827226282239"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "sess",
              values: ["EF06F2541B344477AA9D355E3A0238B4"],
            },
          ],
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_AD_PLACEHOLDER_NATIVE",
          spacing: "spacing-05",
          clusterId: "AD_PLACEHOLDER_NATIVE",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f_EAT_0",
          trackingKey:
            '{"br":4.5,"rc":391,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_6","ctt":"LOCATION","pt":"restaurant","lid":1803467,"pir":13,"mid":409857073,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.5,"rc":391,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_6","ctt":"LOCATION","pt":"restaurant","lid":1803467,"pir":13,"mid":409857073,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
            stableDiffingType:
              "RestaurantListCard_restaurant_a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "5. Steam 'n' Spice",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • Contemporary • Singaporean • Hong Kong",
            },
            secondaryInfo: null,
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: {
                __typename: "AppPresentation_BorderlessButton",
                commerceTrackingUrl: null,
                link: {
                  __typename: "AppPresentation_ExternalLink",
                  externalUrl:
                    "https://www.marriott.com/hotelwebsites/us/n/nhasi/nhasi_pdf/MENU_FINAL_-_STEAM_n_SPICE_2019.pdf?_=&aff=MARUS&affname=1011l12512&co=US&nt=PH",
                  text: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Menu",
                    debugValueKey: null,
                  },
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View menu for Steam 'n' Spice",
                    debugValueKey: null,
                  },
                  trackingContext: "server_menu",
                },
                variant: "PRIMARY",
              },
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "1803467",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 1600,
                maxWidth: 2400,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/6d/ec/31/sns-dinner.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4.5,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "391",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Steam 'n' Spice",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_4",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_2728e3c3-111d-413d-98a0-32f667d331d7_EAT_0",
          trackingKey:
            '{"br":4.5,"rc":330,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_7","ctt":"LOCATION","pt":"restaurant","lid":6979336,"pir":22,"mid":277112395,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_2728e3c3-111d-413d-98a0-32f667d331d7_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.5,"rc":330,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_7","ctt":"LOCATION","pt":"restaurant","lid":6979336,"pir":22,"mid":277112395,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_2728e3c3-111d-413d-98a0-32f667d331d7",
            stableDiffingType:
              "RestaurantListCard_restaurant_2728e3c3-111d-413d-98a0-32f667d331d7",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "6. Cookbook Cafe",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$$$ • Seafood • International • European",
            },
            secondaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Open now",
            },
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: {
                __typename: "AppPresentation_BorderlessButton",
                commerceTrackingUrl: null,
                link: {
                  __typename: "AppPresentation_ExternalLink",
                  externalUrl:
                    "http://nhatrang.intercontinental.com/uploads/wysiwyg/FnB/HotelMenu/The_Lobby_Bar_Nov_2020_A_La_Carte_Breakfast_Drink_.pdf",
                  text: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Menu",
                    debugValueKey: null,
                  },
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View menu for Cookbook Cafe",
                    debugValueKey: null,
                  },
                  trackingContext: "server_menu",
                },
                variant: "PRIMARY",
              },
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "6979336",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 1333,
                maxWidth: 2000,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/84/66/4b/the-dessert-section-for.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4.5,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "330",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=2728e3c3-111d-413d-98a0-32f667d331d7",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=2728e3c3-111d-413d-98a0-32f667d331d7",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "2728e3c3-111d-413d-98a0-32f667d331d7",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Cookbook Cafe",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_5",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_58dcec40-99dd-4420-851c-75d9aa007e0a_EAT_0",
          trackingKey:
            '{"br":4.5,"rc":116,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_8","ctt":"LOCATION","pt":"restaurant","lid":19085668,"pir":42,"mid":442997144,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_58dcec40-99dd-4420-851c-75d9aa007e0a_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.5,"rc":116,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_8","ctt":"LOCATION","pt":"restaurant","lid":19085668,"pir":42,"mid":442997144,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_58dcec40-99dd-4420-851c-75d9aa007e0a",
            stableDiffingType:
              "RestaurantListCard_restaurant_58dcec40-99dd-4420-851c-75d9aa007e0a",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "7. Pizza 4P’s Nha Trang – NT",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • Italian • Pizza • Gastropub",
            },
            secondaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Open now",
            },
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: {
                __typename: "AppPresentation_BorderlessButton",
                commerceTrackingUrl: null,
                link: {
                  __typename: "AppPresentation_ExternalLink",
                  externalUrl: "https://pizza4ps.com/menu/pizza/",
                  text: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Menu",
                    debugValueKey: null,
                  },
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View menu for Pizza 4P’s Nha Trang – NT",
                    debugValueKey: null,
                  },
                  trackingContext: "server_menu",
                },
                variant: "PRIMARY",
              },
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "19085668",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 1500,
                maxWidth: 2250,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/67/99/98/burrata-parma-ham-pizza.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4.5,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "116",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=58dcec40-99dd-4420-851c-75d9aa007e0a",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=58dcec40-99dd-4420-851c-75d9aa007e0a",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "58dcec40-99dd-4420-851c-75d9aa007e0a",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Pizza 4P’s Nha Trang – NT",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_6",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_18e3d65d-b5bf-47b8-b7db-e9d4664945c6_EAT_0",
          trackingKey:
            '{"br":4.0,"rc":369,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_9","ctt":"LOCATION","pt":"restaurant","lid":7228037,"pir":49,"mid":118398120,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_18e3d65d-b5bf-47b8-b7db-e9d4664945c6_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.0,"rc":369,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_9","ctt":"LOCATION","pt":"restaurant","lid":7228037,"pir":49,"mid":118398120,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_18e3d65d-b5bf-47b8-b7db-e9d4664945c6",
            stableDiffingType:
              "RestaurantListCard_restaurant_18e3d65d-b5bf-47b8-b7db-e9d4664945c6",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "8. Costa Seafood Restaurant",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • Seafood • Asian • Fusion",
            },
            secondaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Open now",
            },
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "7228037",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 533,
                maxWidth: 800,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/0e/9c/a8/costa-seafood-restaurant.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "369",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=18e3d65d-b5bf-47b8-b7db-e9d4664945c6",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=18e3d65d-b5bf-47b8-b7db-e9d4664945c6",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "18e3d65d-b5bf-47b8-b7db-e9d4664945c6",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Costa Seafood Restaurant",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_7",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_415e1fad-35b9-4893-8470-4021d1cbd5a6_EAT_0",
          trackingKey:
            '{"br":5.0,"rc":40,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_10","ctt":"LOCATION","pt":"restaurant","lid":17750791,"pir":56,"mid":432794900,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_415e1fad-35b9-4893-8470-4021d1cbd5a6_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":5.0,"rc":40,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_10","ctt":"LOCATION","pt":"restaurant","lid":17750791,"pir":56,"mid":432794900,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_415e1fad-35b9-4893-8470-4021d1cbd5a6",
            stableDiffingType:
              "RestaurantListCard_restaurant_415e1fad-35b9-4893-8470-4021d1cbd5a6",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "9. Costa Robata Nha Trang - Japanese restaurant",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • Japanese • Brew Pub • Seafood",
            },
            secondaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Open now",
            },
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: {
                __typename: "AppPresentation_BorderlessButton",
                commerceTrackingUrl: null,
                link: {
                  __typename: "AppPresentation_ExternalLink",
                  externalUrl:
                    "https://robata.vn/media/1060/robatayaki_menu_lores.pdf",
                  text: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Menu",
                    debugValueKey: null,
                  },
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string:
                      "View menu for Costa Robata Nha Trang - Japanese restaurant",
                    debugValueKey: null,
                  },
                  trackingContext: "server_menu",
                },
                variant: "PRIMARY",
              },
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "17750791",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 2410,
                maxWidth: 3615,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/cb/ed/14/take-delight-in-our-exclusive.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 5,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "40",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=415e1fad-35b9-4893-8470-4021d1cbd5a6",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=415e1fad-35b9-4893-8470-4021d1cbd5a6",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "415e1fad-35b9-4893-8470-4021d1cbd5a6",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string:
                  "View details for Costa Robata Nha Trang - Japanese restaurant",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_8",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_5acc5371-e3f6-4b0c-b730-939f24b46086_EAT_0",
          trackingKey:
            '{"br":4.0,"rc":342,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_11","ctt":"LOCATION","pt":"restaurant","lid":7785935,"pir":62,"mid":319693880,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_5acc5371-e3f6-4b0c-b730-939f24b46086_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.0,"rc":342,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_11","ctt":"LOCATION","pt":"restaurant","lid":7785935,"pir":62,"mid":319693880,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_5acc5371-e3f6-4b0c-b730-939f24b46086",
            stableDiffingType:
              "RestaurantListCard_restaurant_5acc5371-e3f6-4b0c-b730-939f24b46086",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "10. RuNam Bistro",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • Cafe • Asian • Vietnamese",
            },
            secondaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Open now",
            },
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "7785935",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 1333,
                maxWidth: 2000,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/0e/24/38/qu-y-bar-m-t-trong-nh.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "342",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=5acc5371-e3f6-4b0c-b730-939f24b46086",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=5acc5371-e3f6-4b0c-b730-939f24b46086",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "5acc5371-e3f6-4b0c-b730-939f24b46086",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for RuNam Bistro",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_9",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_AdPlaceholderNative",
          trackingTitle: "AdPlaceholder_NATIVE_1",
          trackingKey:
            '{"adt":"NATIVE","ik":"47d15468-ba0a-4074-a391-06c229ecaba6_12","sn":"Attractions"}',
          stableDiffingType: "AdPlaceholder_NATIVE_1",
          clusterId: "AD_PLACEHOLDER_NATIVE",
          adUnitId: "/5349/ta.ta.com.s/as.vietnam.khanh_hoa.nha_trang",
          adSizes: ["FLUID", "_300x250"],
          targetingParams: [
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "country",
              values: ["293921"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "detail",
              values: ["0"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "geo",
              values: ["293928"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "hname",
              values: ["Nha_Trang"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "loctype",
              values: ["attractions"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "PageType",
              values: ["Attractions"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "platform",
              values: ["mobile_app"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "rd",
              values: ["com"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "region",
              values: ["1184689"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "pos",
              values: ["inline2"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "fluidType",
              values: ["mobile"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "correlator",
              values: ["3805827226282239"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "sess",
              values: ["EF06F2541B344477AA9D355E3A0238B4"],
            },
          ],
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_AD_PLACEHOLDER_NATIVE_1",
          spacing: "spacing-05",
          clusterId: "AD_PLACEHOLDER_NATIVE",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_dc42c9c9-8cbe-43a2-aa00-abf5df0aa18e_EAT_0",
          trackingKey:
            '{"br":4.0,"rc":117,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_13","ctt":"LOCATION","pt":"restaurant","lid":11827167,"pir":67,"mid":182748143,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_dc42c9c9-8cbe-43a2-aa00-abf5df0aa18e_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.0,"rc":117,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_13","ctt":"LOCATION","pt":"restaurant","lid":11827167,"pir":67,"mid":182748143,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_dc42c9c9-8cbe-43a2-aa00-abf5df0aa18e",
            stableDiffingType:
              "RestaurantListCard_restaurant_dc42c9c9-8cbe-43a2-aa00-abf5df0aa18e",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "11. Pho Hong Giang",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$ • Fast Food • Asian • Vietnamese",
            },
            secondaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Open now",
            },
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "11827167",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 1236,
                maxWidth: 1236,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/e4/83/ef/bun-bo-hue.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "117",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=dc42c9c9-8cbe-43a2-aa00-abf5df0aa18e",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=dc42c9c9-8cbe-43a2-aa00-abf5df0aa18e",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "dc42c9c9-8cbe-43a2-aa00-abf5df0aa18e",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Pho Hong Giang",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_10",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_611d526b-9c9f-440f-8c35-55abe3556a03_EAT_0",
          trackingKey:
            '{"br":4.5,"rc":41,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_14","ctt":"LOCATION","pt":"restaurant","lid":14116233,"pir":69,"mid":471698254,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_611d526b-9c9f-440f-8c35-55abe3556a03_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.5,"rc":41,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_14","ctt":"LOCATION","pt":"restaurant","lid":14116233,"pir":69,"mid":471698254,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_611d526b-9c9f-440f-8c35-55abe3556a03",
            stableDiffingType:
              "RestaurantListCard_restaurant_611d526b-9c9f-440f-8c35-55abe3556a03",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "12. Quan Com Chuon Chuon Kim",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • Asian • Vietnamese • Vegetarian Friendly",
            },
            secondaryInfo: null,
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "14116233",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 1536,
                maxWidth: 2048,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/1d/8b/4e/this-is-so-pretty.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4.5,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "41",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=611d526b-9c9f-440f-8c35-55abe3556a03",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=611d526b-9c9f-440f-8c35-55abe3556a03",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "611d526b-9c9f-440f-8c35-55abe3556a03",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Quan Com Chuon Chuon Kim",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_11",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_9bfa7132-0920-4e6f-8243-fa5c55268f6f_EAT_0",
          trackingKey:
            '{"br":4.0,"rc":61,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_15","ctt":"LOCATION","pt":"restaurant","lid":12357605,"pir":83,"mid":426799964,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_9bfa7132-0920-4e6f-8243-fa5c55268f6f_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.0,"rc":61,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_15","ctt":"LOCATION","pt":"restaurant","lid":12357605,"pir":83,"mid":426799964,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_9bfa7132-0920-4e6f-8243-fa5c55268f6f",
            stableDiffingType:
              "RestaurantListCard_restaurant_9bfa7132-0920-4e6f-8243-fa5c55268f6f",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "13. Hokkaido Ramen Restaurant",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$ • Japanese • Sushi • Asian",
            },
            secondaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Open now",
            },
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "12357605",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 2048,
                maxWidth: 1536,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/70/73/5c/photo0jpg.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "61",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=9bfa7132-0920-4e6f-8243-fa5c55268f6f",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=9bfa7132-0920-4e6f-8243-fa5c55268f6f",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "9bfa7132-0920-4e6f-8243-fa5c55268f6f",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Hokkaido Ramen Restaurant",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_12",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_d65f11d5-2708-4522-a03e-04749c31e657_EAT_0",
          trackingKey:
            '{"br":5.0,"rc":24,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_16","ctt":"LOCATION","pt":"restaurant","lid":17713435,"pir":89,"mid":436429334,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_d65f11d5-2708-4522-a03e-04749c31e657_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":5.0,"rc":24,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_16","ctt":"LOCATION","pt":"restaurant","lid":17713435,"pir":89,"mid":436429334,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_d65f11d5-2708-4522-a03e-04749c31e657",
            stableDiffingType:
              "RestaurantListCard_restaurant_d65f11d5-2708-4522-a03e-04749c31e657",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "14. Vandana Authentic Indian Cusine",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$ • Quick Bites • Indian • Asian",
            },
            secondaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Open now",
            },
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "17713435",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 1079,
                maxWidth: 1079,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/03/62/16/happy-customers.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 5,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "24",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=d65f11d5-2708-4522-a03e-04749c31e657",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=d65f11d5-2708-4522-a03e-04749c31e657",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "d65f11d5-2708-4522-a03e-04749c31e657",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Vandana Authentic Indian Cusine",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_13",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_a2d87f4a-6937-4235-8c7a-596a2c8aeb20_EAT_0",
          trackingKey:
            '{"br":4.0,"rc":80,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_17","ctt":"LOCATION","pt":"restaurant","lid":12597557,"pir":90,"mid":358357459,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_a2d87f4a-6937-4235-8c7a-596a2c8aeb20_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.0,"rc":80,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_17","ctt":"LOCATION","pt":"restaurant","lid":12597557,"pir":90,"mid":358357459,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_a2d87f4a-6937-4235-8c7a-596a2c8aeb20",
            stableDiffingType:
              "RestaurantListCard_restaurant_a2d87f4a-6937-4235-8c7a-596a2c8aeb20",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "15. Pho Hong",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$ • Asian • Vietnamese • Soups",
            },
            secondaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Open now",
            },
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "12597557",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 2048,
                maxWidth: 2048,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/5c/19/d3/photo0jpg.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "80",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=a2d87f4a-6937-4235-8c7a-596a2c8aeb20",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=a2d87f4a-6937-4235-8c7a-596a2c8aeb20",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "a2d87f4a-6937-4235-8c7a-596a2c8aeb20",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Pho Hong",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_14",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_b6394607-722d-4122-bb22-d4ae4cf9f64d_EAT_0",
          trackingKey:
            '{"br":4.0,"rc":32,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_18","ctt":"LOCATION","pt":"restaurant","lid":12340184,"pir":130,"mid":349527473,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_b6394607-722d-4122-bb22-d4ae4cf9f64d_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.0,"rc":32,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_18","ctt":"LOCATION","pt":"restaurant","lid":12340184,"pir":130,"mid":349527473,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_b6394607-722d-4122-bb22-d4ae4cf9f64d",
            stableDiffingType:
              "RestaurantListCard_restaurant_b6394607-722d-4122-bb22-d4ae4cf9f64d",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "16. Yuki Sushi Nha Trang",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • Japanese • Sushi • Asian",
            },
            secondaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Open now",
            },
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "12340184",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 630,
                maxWidth: 1024,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/d5/5d/b1/unagi-sushi.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "32",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=b6394607-722d-4122-bb22-d4ae4cf9f64d",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=b6394607-722d-4122-bb22-d4ae4cf9f64d",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "b6394607-722d-4122-bb22-d4ae4cf9f64d",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Yuki Sushi Nha Trang",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_15",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_AdPlaceholderNative",
          trackingTitle: "AdPlaceholder_NATIVE_2",
          trackingKey:
            '{"adt":"NATIVE","ik":"47d15468-ba0a-4074-a391-06c229ecaba6_19","sn":"Attractions"}',
          stableDiffingType: "AdPlaceholder_NATIVE_2",
          clusterId: "AD_PLACEHOLDER_NATIVE",
          adUnitId: "/5349/ta.ta.com.s/as.vietnam.khanh_hoa.nha_trang",
          adSizes: ["FLUID", "_300x250"],
          targetingParams: [
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "country",
              values: ["293921"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "detail",
              values: ["0"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "geo",
              values: ["293928"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "hname",
              values: ["Nha_Trang"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "loctype",
              values: ["attractions"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "PageType",
              values: ["Attractions"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "platform",
              values: ["mobile_app"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "rd",
              values: ["com"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "region",
              values: ["1184689"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "pos",
              values: ["inline3"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "fluidType",
              values: ["mobile"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "correlator",
              values: ["3805827226282239"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "sess",
              values: ["EF06F2541B344477AA9D355E3A0238B4"],
            },
          ],
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_AD_PLACEHOLDER_NATIVE_2",
          spacing: "spacing-05",
          clusterId: "AD_PLACEHOLDER_NATIVE",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_be8367fd-267f-4f6b-a902-2ca490e6185a_EAT_0",
          trackingKey:
            '{"br":4.0,"rc":54,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_20","ctt":"LOCATION","pt":"restaurant","lid":7225437,"pir":139,"mid":143644908,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_be8367fd-267f-4f6b-a902-2ca490e6185a_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.0,"rc":54,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_20","ctt":"LOCATION","pt":"restaurant","lid":7225437,"pir":139,"mid":143644908,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_be8367fd-267f-4f6b-a902-2ca490e6185a",
            stableDiffingType:
              "RestaurantListCard_restaurant_be8367fd-267f-4f6b-a902-2ca490e6185a",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "17. V-Smile",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$ • Vietnamese",
            },
            secondaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Open now",
            },
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "7225437",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 593,
                maxWidth: 960,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/8f/d8/ec/good.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "54",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=be8367fd-267f-4f6b-a902-2ca490e6185a",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=be8367fd-267f-4f6b-a902-2ca490e6185a",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "be8367fd-267f-4f6b-a902-2ca490e6185a",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for V-Smile",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_16",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_fee3d8ba-d63d-4818-96dd-cfe37fd0658a_EAT_0",
          trackingKey:
            '{"br":4.0,"rc":43,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_21","ctt":"LOCATION","pt":"restaurant","lid":13325250,"pir":150,"mid":377929769,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_fee3d8ba-d63d-4818-96dd-cfe37fd0658a_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.0,"rc":43,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_21","ctt":"LOCATION","pt":"restaurant","lid":13325250,"pir":150,"mid":377929769,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_fee3d8ba-d63d-4818-96dd-cfe37fd0658a",
            stableDiffingType:
              "RestaurantListCard_restaurant_fee3d8ba-d63d-4818-96dd-cfe37fd0658a",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "18. Cafe Terrace",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • Italian • French • Asian",
            },
            secondaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Open now",
            },
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "13325250",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 1536,
                maxWidth: 2048,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/86/c0/29/photo1jpg.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "43",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=fee3d8ba-d63d-4818-96dd-cfe37fd0658a",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=fee3d8ba-d63d-4818-96dd-cfe37fd0658a",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "fee3d8ba-d63d-4818-96dd-cfe37fd0658a",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Cafe Terrace",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_17",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_e8df3412-140d-40d5-a6ab-60fcef7f6f54_EAT_0",
          trackingKey:
            '{"br":5.0,"rc":8,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_22","ctt":"LOCATION","pt":"restaurant","lid":14791124,"pir":158,"mid":328644442,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_e8df3412-140d-40d5-a6ab-60fcef7f6f54_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":5.0,"rc":8,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_22","ctt":"LOCATION","pt":"restaurant","lid":14791124,"pir":158,"mid":328644442,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_e8df3412-140d-40d5-a6ab-60fcef7f6f54",
            stableDiffingType:
              "RestaurantListCard_restaurant_e8df3412-140d-40d5-a6ab-60fcef7f6f54",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "19. Kichi Kichi Ariyana Nha Trang",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$ • Japanese",
            },
            secondaryInfo: null,
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "14791124",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 960,
                maxWidth: 638,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/96/b7/5a/getlstd-property-photo.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 5,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "8",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=e8df3412-140d-40d5-a6ab-60fcef7f6f54",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=e8df3412-140d-40d5-a6ab-60fcef7f6f54",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "e8df3412-140d-40d5-a6ab-60fcef7f6f54",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Kichi Kichi Ariyana Nha Trang",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_18",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_3f1993c2-4f39-41d1-be86-70759551ab82_EAT_0",
          trackingKey:
            '{"br":4.0,"rc":24,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_23","ctt":"LOCATION","pt":"restaurant","lid":4209780,"pir":168,"mid":144425158,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_3f1993c2-4f39-41d1-be86-70759551ab82_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.0,"rc":24,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_23","ctt":"LOCATION","pt":"restaurant","lid":4209780,"pir":168,"mid":144425158,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_3f1993c2-4f39-41d1-be86-70759551ab82",
            stableDiffingType:
              "RestaurantListCard_restaurant_3f1993c2-4f39-41d1-be86-70759551ab82",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "20. Hai Au Restaurant",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • International",
            },
            secondaryInfo: null,
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "4209780",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 2448,
                maxWidth: 3264,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/9b/c0/c6/caption.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "24",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=3f1993c2-4f39-41d1-be86-70759551ab82",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=3f1993c2-4f39-41d1-be86-70759551ab82",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "3f1993c2-4f39-41d1-be86-70759551ab82",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Hai Au Restaurant",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_19",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_201dddfb-267d-480a-9b7d-128f1da7921f_EAT_0",
          trackingKey:
            '{"br":4.5,"rc":11,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_24","ctt":"LOCATION","pt":"restaurant","lid":14791103,"pir":181,"mid":328643620,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_201dddfb-267d-480a-9b7d-128f1da7921f_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.5,"rc":11,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_24","ctt":"LOCATION","pt":"restaurant","lid":14791103,"pir":181,"mid":328643620,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_201dddfb-267d-480a-9b7d-128f1da7921f",
            stableDiffingType:
              "RestaurantListCard_restaurant_201dddfb-267d-480a-9b7d-128f1da7921f",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "21. Hutong Ariyana Nha Trang",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • Chinese",
            },
            secondaryInfo: null,
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: {
                __typename: "AppPresentation_BorderlessButton",
                commerceTrackingUrl: null,
                link: {
                  __typename: "AppPresentation_ExternalLink",
                  externalUrl: "http://hutong.com.vn/menus/thuc-don-ha-noi/",
                  text: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Menu",
                    debugValueKey: null,
                  },
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View menu for Hutong Ariyana Nha Trang",
                    debugValueKey: null,
                  },
                  trackingContext: "server_menu",
                },
                variant: "PRIMARY",
              },
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "14791103",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 720,
                maxWidth: 960,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/96/b4/24/getlstd-property-photo.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4.5,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "11",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=201dddfb-267d-480a-9b7d-128f1da7921f",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=201dddfb-267d-480a-9b7d-128f1da7921f",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "201dddfb-267d-480a-9b7d-128f1da7921f",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Hutong Ariyana Nha Trang",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_20",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_a2751f6f-6a3d-40cf-8323-05b38907f9cc_EAT_0",
          trackingKey:
            '{"br":4.5,"rc":8,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_25","ctt":"LOCATION","pt":"restaurant","lid":16694853,"pir":195,"mid":489292478,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_a2751f6f-6a3d-40cf-8323-05b38907f9cc_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.5,"rc":8,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_25","ctt":"LOCATION","pt":"restaurant","lid":16694853,"pir":195,"mid":489292478,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_a2751f6f-6a3d-40cf-8323-05b38907f9cc",
            stableDiffingType:
              "RestaurantListCard_restaurant_a2751f6f-6a3d-40cf-8323-05b38907f9cc",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "22. Pho Ly Quoc Su - Nha Trang",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$ • Fusion • Vietnamese",
            },
            secondaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Open now",
            },
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: {
                __typename: "AppPresentation_BorderlessButton",
                commerceTrackingUrl: null,
                link: {
                  __typename: "AppPresentation_ExternalLink",
                  externalUrl:
                    "https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.6435-9/198882946_1952585371574947_4448672531643430921_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=c4c01c&_nc_ohc=mMr9VV02uokAX_xcoOQ&_nc_ht=scontent.fsgn4-1.fna&oh=14e8bd1bb98d290e428342421d816a7b&oe=60D1BFA0",
                  text: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "Menu",
                    debugValueKey: null,
                  },
                  accessibilityString: {
                    __typename: "AppPresentation_LocalizedString",
                    string: "View menu for Pho Ly Quoc Su - Nha Trang",
                    debugValueKey: null,
                  },
                  trackingContext: "server_menu",
                },
                variant: "PRIMARY",
              },
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "16694853",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 426,
                maxWidth: 766,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/2a/02/be/opening-hours.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4.5,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "8",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=a2751f6f-6a3d-40cf-8323-05b38907f9cc",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=a2751f6f-6a3d-40cf-8323-05b38907f9cc",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "a2751f6f-6a3d-40cf-8323-05b38907f9cc",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Pho Ly Quoc Su - Nha Trang",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_21",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_eb905040-74cf-4c33-b7d8-8fd369e538b7_EAT_0",
          trackingKey:
            '{"br":5.0,"rc":4,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_26","ctt":"LOCATION","pt":"restaurant","lid":19941597,"pir":227,"mid":447481913,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_eb905040-74cf-4c33-b7d8-8fd369e538b7_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":5.0,"rc":4,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_26","ctt":"LOCATION","pt":"restaurant","lid":19941597,"pir":227,"mid":447481913,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_eb905040-74cf-4c33-b7d8-8fd369e538b7",
            stableDiffingType:
              "RestaurantListCard_restaurant_eb905040-74cf-4c33-b7d8-8fd369e538b7",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "23. An Bistro",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • Vietnamese",
            },
            secondaryInfo: null,
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "19941597",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 800,
                maxWidth: 800,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ac/08/39/getlstd-property-photo.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 5,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "4",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=eb905040-74cf-4c33-b7d8-8fd369e538b7",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=eb905040-74cf-4c33-b7d8-8fd369e538b7",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "eb905040-74cf-4c33-b7d8-8fd369e538b7",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for An Bistro",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_22",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_f5ce2629-57f1-45c5-b944-dcddfd5ab4ab_EAT_0",
          trackingKey:
            '{"br":3.5,"rc":18,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_27","ctt":"LOCATION","pt":"restaurant","lid":14791086,"pir":258,"mid":328639241,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_f5ce2629-57f1-45c5-b944-dcddfd5ab4ab_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":3.5,"rc":18,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_27","ctt":"LOCATION","pt":"restaurant","lid":14791086,"pir":258,"mid":328639241,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_f5ce2629-57f1-45c5-b944-dcddfd5ab4ab",
            stableDiffingType:
              "RestaurantListCard_restaurant_f5ce2629-57f1-45c5-b944-dcddfd5ab4ab",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "24. Sumo BBQ",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • Japanese • Barbecue",
            },
            secondaryInfo: null,
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "14791086",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 330,
                maxWidth: 576,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/96/a3/09/getlstd-property-photo.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 3.5,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "18",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=f5ce2629-57f1-45c5-b944-dcddfd5ab4ab",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=f5ce2629-57f1-45c5-b944-dcddfd5ab4ab",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "f5ce2629-57f1-45c5-b944-dcddfd5ab4ab",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Sumo BBQ",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_23",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_7b8c32a6-cbc5-4f05-889e-ae0086b7a43d_EAT_0",
          trackingKey:
            '{"br":4.0,"rc":16,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_28","ctt":"LOCATION","pt":"restaurant","lid":13554230,"pir":276,"mid":328635623,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_7b8c32a6-cbc5-4f05-889e-ae0086b7a43d_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.0,"rc":16,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_28","ctt":"LOCATION","pt":"restaurant","lid":13554230,"pir":276,"mid":328635623,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_7b8c32a6-cbc5-4f05-889e-ae0086b7a43d",
            stableDiffingType:
              "RestaurantListCard_restaurant_7b8c32a6-cbc5-4f05-889e-ae0086b7a43d",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "25. Crystal Jade Kitchen",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • Chinese • Asian",
            },
            secondaryInfo: null,
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "13554230",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 3648,
                maxWidth: 5472,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/96/94/e7/getlstd-property-photo.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "16",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=7b8c32a6-cbc5-4f05-889e-ae0086b7a43d",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=7b8c32a6-cbc5-4f05-889e-ae0086b7a43d",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "7b8c32a6-cbc5-4f05-889e-ae0086b7a43d",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Crystal Jade Kitchen",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_24",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_2c700646-5679-4767-88d7-2bd635d47f6d_EAT_0",
          trackingKey:
            '{"br":5.0,"rc":2,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_29","ctt":"LOCATION","pt":"restaurant","lid":19649973,"pir":295,"mid":440629538,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_2c700646-5679-4767-88d7-2bd635d47f6d_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":5.0,"rc":2,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_29","ctt":"LOCATION","pt":"restaurant","lid":19649973,"pir":295,"mid":440629538,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_2c700646-5679-4767-88d7-2bd635d47f6d",
            stableDiffingType:
              "RestaurantListCard_restaurant_2c700646-5679-4767-88d7-2bd635d47f6d",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "26. Pho Bo 45 Tran Phu",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$ • Asian • Vietnamese",
            },
            secondaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Open now",
            },
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "19649973",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 432,
                maxWidth: 650,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/43/79/22/ph-bo-45-tr-n-phu.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 5,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "2",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=2c700646-5679-4767-88d7-2bd635d47f6d",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=2c700646-5679-4767-88d7-2bd635d47f6d",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "2c700646-5679-4767-88d7-2bd635d47f6d",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Pho Bo 45 Tran Phu",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_25",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_4927d484-ee41-4ec6-9e7a-ce455dbfa85d_EAT_0",
          trackingKey:
            '{"br":4.0,"rc":9,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_30","ctt":"LOCATION","pt":"restaurant","lid":8667048,"pir":309,"mid":161890868,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_4927d484-ee41-4ec6-9e7a-ce455dbfa85d_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.0,"rc":9,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_30","ctt":"LOCATION","pt":"restaurant","lid":8667048,"pir":309,"mid":161890868,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_4927d484-ee41-4ec6-9e7a-ce455dbfa85d",
            stableDiffingType:
              "RestaurantListCard_restaurant_4927d484-ee41-4ec6-9e7a-ce455dbfa85d",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "27. Hai Minh Restaurant",
              debugValueKey: null,
            },
            primaryInfo: null,
            secondaryInfo: null,
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "8667048",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 1500,
                maxWidth: 2000,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/a6/42/34/hai-minh-restaurant.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "9",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=4927d484-ee41-4ec6-9e7a-ce455dbfa85d",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=4927d484-ee41-4ec6-9e7a-ce455dbfa85d",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "4927d484-ee41-4ec6-9e7a-ce455dbfa85d",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Hai Minh Restaurant",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_26",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_41c5539f-8947-43be-97b6-a4b6d1717d27_EAT_0",
          trackingKey:
            '{"br":4.0,"rc":5,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_31","ctt":"LOCATION","pt":"restaurant","lid":17581501,"pir":322,"mid":430469957,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_41c5539f-8947-43be-97b6-a4b6d1717d27_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":4.0,"rc":5,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_31","ctt":"LOCATION","pt":"restaurant","lid":17581501,"pir":322,"mid":430469957,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_41c5539f-8947-43be-97b6-a4b6d1717d27",
            stableDiffingType:
              "RestaurantListCard_restaurant_41c5539f-8947-43be-97b6-a4b6d1717d27",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "28. Lang Ngon Corner - Vietnamese Cuisine",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$ • Vietnamese",
            },
            secondaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "Open now",
            },
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "17581501",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 1367,
                maxWidth: 2048,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/a8/73/45/lang-ngon-corner-t-ng.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 4,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "5",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=41c5539f-8947-43be-97b6-a4b6d1717d27",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=41c5539f-8947-43be-97b6-a4b6d1717d27",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "41c5539f-8947-43be-97b6-a4b6d1717d27",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string:
                  "View details for Lang Ngon Corner - Vietnamese Cuisine",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_27",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_a1828226-223f-4e9c-a6bd-ca31e5b79856_EAT_0",
          trackingKey:
            '{"br":3.5,"rc":8,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_32","ctt":"LOCATION","pt":"restaurant","lid":10832928,"pir":328,"mid":309139066,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_a1828226-223f-4e9c-a6bd-ca31e5b79856_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":3.5,"rc":8,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_32","ctt":"LOCATION","pt":"restaurant","lid":10832928,"pir":328,"mid":309139066,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_a1828226-223f-4e9c-a6bd-ca31e5b79856",
            stableDiffingType:
              "RestaurantListCard_restaurant_a1828226-223f-4e9c-a6bd-ca31e5b79856",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "29. Com Tam Truong Tau Restaurant",
              debugValueKey: null,
            },
            primaryInfo: null,
            secondaryInfo: null,
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "10832928",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 2000,
                maxWidth: 1500,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/6d/16/7a/broken-rice-dish.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 3.5,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "8",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=a1828226-223f-4e9c-a6bd-ca31e5b79856",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=a1828226-223f-4e9c-a6bd-ca31e5b79856",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "a1828226-223f-4e9c-a6bd-ca31e5b79856",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Com Tam Truong Tau Restaurant",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_0_28",
          spacing: "spacing-05",
          clusterId: "EAT_0",
          divider: "full-bleed",
          background: null,
        },
        {
          __typename: "AppPresentation_SingleCard",
          trackingTitle:
            "RestaurantListCard_restaurant_f9bc7d08-90ca-4914-9287-9bba5511e466_EAT_0",
          trackingKey:
            '{"br":3.5,"rc":24,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_33","ctt":"LOCATION","pt":"restaurant","lid":7359136,"pir":361,"mid":127216545,"sn":"Attractions"}',
          stableDiffingType:
            "RestaurantListCard_restaurant_f9bc7d08-90ca-4914-9287-9bba5511e466_EAT_0",
          singleCardContent: {
            __typename: "AppPresentation_HorizontalCommerceCard",
            badge: null,
            trackingKey:
              '{"br":3.5,"rc":24,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_33","ctt":"LOCATION","pt":"restaurant","lid":7359136,"pir":361,"mid":127216545,"sn":"Attractions"}',
            trackingTitle:
              "RestaurantListCard_restaurant_f9bc7d08-90ca-4914-9287-9bba5511e466",
            stableDiffingType:
              "RestaurantListCard_restaurant_f9bc7d08-90ca-4914-9287-9bba5511e466",
            cardTitle: {
              __typename: "AppPresentation_LocalizedString",
              string: "30. Goc Tien",
              debugValueKey: null,
            },
            primaryInfo: {
              __typename: "AppPresentation_JoinedLocalizableObjects",
              text: "$$ - $$$",
            },
            secondaryInfo: null,
            commerceTimes: [],
            commerceButtons: {
              __typename: "AppPresentation_Buttons",
              singleButton: null,
              firstCommerceButton: null,
              secondCommerceButton: null,
            },
            isSaved: false,
            saveId: {
              __typename: "Trips_ReferenceV2",
              id: "7359136",
              type: "location",
            },
            cardPhoto: {
              __typename: "AppPresentation_PhotoItem",
              sizes: {
                __typename: "AppPresentation_PhotoItemSizeDynamic",
                maxHeight: 1161,
                maxWidth: 2064,
                urlTemplate:
                  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/95/2b/a1/caption.jpg?w={width}&h={height}&s=1",
              },
            },
            distance: null,
            bubbleRating: {
              __typename: "AppPresentation_BubbleRating",
              rating: 3.5,
              numberReviews: {
                __typename: "AppPresentation_LocalizedString",
                string: "24",
                debugValueKey: null,
              },
            },
            labels: [],
            descriptiveText: null,
            cardLink: {
              __typename: "AppPresentation_InternalLink",
              route: {
                __typename: "Routing_Route",
                fragment: null,
                page: "AppDetail",
                url: "/AppDetail?contentType=restaurant&contentId=f9bc7d08-90ca-4914-9287-9bba5511e466",
                nonCanonicalUrl:
                  "/AppDetail?contentType=restaurant&contentId=f9bc7d08-90ca-4914-9287-9bba5511e466",
                typedParams: {
                  __typename: "Routing_AppDetailParameters",
                  contentId: "f9bc7d08-90ca-4914-9287-9bba5511e466",
                  contentType: "restaurant",
                  spAttributionToken: null,
                },
              },
              webviewRoute: null,
              text: null,
              accessibilityString: {
                __typename: "AppPresentation_LocalizedString",
                string: "View details for Goc Tien",
                debugValueKey: null,
              },
              trackingContext: "server_card",
            },
          },
          clusterId: "EAT_0",
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection_EAT_1",
          spacing: "spacing-04",
          clusterId: "EAT_1",
          divider: null,
          background: null,
        },
        {
          __typename: "AppPresentation_SecondaryButton",
          clusterId: "EAT_1",
          trackingKey:
            '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_34","bt":"NEXT_PAGE","sn":"Attractions"}',
          trackingTitle: "NextPageButtonSection_EAT_1",
          stableDiffingType: "NextPageButtonSection_EAT_1",
          link: {
            __typename: "AppPresentation_UpdateLink",
            text: {
              __typename: "AppPresentation_LocalizedString",
              string: "Show more",
              debugValueKey: null,
            },
            route: {
              __typename: "Routing_Route",
              fragment: null,
              page: "AppList",
              url: "/AppList-g293928-a_contentType.restaurant-a_sort.POPULARITY-a_sortAlgo.desc-zfg10591-a_pagee.eyJzdGFydF9hZnRlciI6WzMuMDM5NDA1NzM3NywxOTUuODQ4MzIyNjYyMjcxMDcsImY5YmM3ZDA4LTkwY2EtNDkxNC05Mjg3LTliYmE1NTExZTQ2NiJdLCJyYWNfb2Zmc2V0IjpudWxsLCJtYXhfcmFjX29mZnNldCI6bnVsbCwib2Zmc2V0IjowLCJsaW1pdCI6MzB9-a_isList.true.html",
              nonCanonicalUrl:
                "/AppList-g293928-a_contentType.restaurant-a_sort.POPULARITY-a_sortAlgo.desc-zfg10591-a_pagee.eyJzdGFydF9hZnRlciI6WzMuMDM5NDA1NzM3NywxOTUuODQ4MzIyNjYyMjcxMDcsImY5YmM3ZDA4LTkwY2EtNDkxNC05Mjg3LTliYmE1NTExZTQ2NiJdLCJyYWNfb2Zmc2V0IjpudWxsLCJtYXhfcmFjX29mZnNldCI6bnVsbCwib2Zmc2V0IjowLCJsaW1pdCI6MzB9-a_isList.true.html",
              typedParams: {
                __typename: "Routing_AppListParameters",
                contentType: "restaurant",
                geoId: 293928,
                isCollectionView: null,
                isList: true,
                isMap: null,
                isNearby: null,
                nearLocationId: null,
                nearLocationType: null,
                pagee:
                  "eyJzdGFydF9hZnRlciI6WzMuMDM5NDA1NzM3NywxOTUuODQ4MzIyNjYyMjcxMDcsImY5YmM3ZDA4LTkwY2EtNDkxNC05Mjg3LTliYmE1NTExZTQ2NiJdLCJyYWNfb2Zmc2V0IjpudWxsLCJtYXhfcmFjX29mZnNldCI6bnVsbCwib2Zmc2V0IjowLCJsaW1pdCI6MzB9",
                sort: "POPULARITY",
                sortOrder: "desc",
                routingFilters: [
                  {
                    __typename: "Routing_Filters",
                    id: "establishment",
                    value: ["10591"],
                  },
                ],
              },
            },
            routeKey: {
              __typename: "Routing_Route",
              fragment: null,
              page: "AppList",
              url: null,
              nonCanonicalUrl: null,
              typedParams: null,
            },
            autoLoad: true,
            updateToken:
              "eyJ2ZXIiOiJ2MiIsInR5cCI6IkpXVCIsImFsZyI6IkVTMjU2IiwidmVyc2lvbiI6IjEifQ.eyJvYmplY3QiOiJ7XCJAY1wiOlwiLlBhZ2luZ1VwZGF0ZVRva2VuXCIsXCJjbHVzdGVySWRzXCI6W1wiRUFUXzFcIl0sXCJwcm92aWRlclVwZGF0ZVRva2Vuc1wiOntcIlJFU1RBVVJBTlRfUEFHRV9DVVJTT1JcIjp7XCJAY1wiOlwiY29tLnRyaXBhZHZpc29yLnNlcnZpY2UuYXBzLmFkYXB0ZXJzLnJlc3RhdXJhbnRzLlJlc3RhdXJhbnRQYWdlQ3Vyc29yVG9rZW5cIixcInBhZ2VDdXJzb3JcIjpcImV5SnpkR0Z5ZEY5aFpuUmxjaUk2V3pNdU1ETTVOREExTnpNM055d3hPVFV1T0RRNE16SXlOall5TWpjeE1EY3NJbVk1WW1NM1pEQTRMVGt3WTJFdE5Ea3hOQzA1TWpnM0xUbGlZbUUxTlRFeFpUUTJOaUpkTENKeVlXTmZiMlptYzJWMElqcHVkV3hzTENKdFlYaGZjbUZqWDI5bVpuTmxkQ0k2Ym5Wc2JDd2liMlptYzJWMElqb3dMQ0pzYVcxcGRDSTZNekI5XCJ9LFwiT1JESU5BTF9PRkZTRVRfUFJPVklERVJcIjp7XCJAY1wiOlwiY29tLnRyaXBhZHZpc29yLnNlcnZpY2UuYXBzLk9yZGluYWxPZmZzZXRQcm92aWRlclRva2VuXCIsXCJvcmRpbmFsT2Zmc2V0XCI6MzB9fSxcInBhZ2VJbmRleFwiOjEsXCJ0eXBlXCI6XCJQQUdJTkFUSU9OXCIsXCJwb2xsaW5nU2VxdWVuY2VOdW1cIjowfSJ9.ODU1YmIwMjAtZTAyOC00NjE0LWFjMzEtMjhkMTI4NzFjNjgwLk1FUUNJRFc2a3d2bE1jenRPRDBEOFNlbkdjTjBCUDNfUFg4LXJhSzZMZVF5MGtpSUFpQjlWQnpvcS1ibkx4MkZkMmJoVnZ4TlNBY0QxZl9iUm9EcWd1WEFteG90Ymc",
            accessibilityString: {
              __typename: "AppPresentation_LocalizedString",
              string: "View more items in this list",
              debugValueKey: null,
            },
            trackingContext: "server_showMore",
          },
        },
        {
          __typename: "AppPresentation_LogicalBreak",
          stableDiffingType: "LogicalBreakSection",
          spacing: "spacing-05",
          clusterId: null,
          divider: null,
          background: null,
        },
        {
          __typename: "AppPresentation_AdPlaceholderNative",
          trackingTitle: "AdPlaceholder_NATIVE_3",
          trackingKey:
            '{"adt":"NATIVE","ik":"47d15468-ba0a-4074-a391-06c229ecaba6_35","sn":"Attractions"}',
          stableDiffingType: "AdPlaceholder_NATIVE_3",
          clusterId: null,
          adUnitId: "/5349/ta.ta.com.s/as.vietnam.khanh_hoa.nha_trang",
          adSizes: ["FLUID", "_300x250"],
          targetingParams: [
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "country",
              values: ["293921"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "detail",
              values: ["0"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "geo",
              values: ["293928"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "hname",
              values: ["Nha_Trang"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "loctype",
              values: ["attractions"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "PageType",
              values: ["Attractions"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "platform",
              values: ["mobile_app"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "rd",
              values: ["com"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "region",
              values: ["1184689"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "pos",
              values: ["footer"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "fluidType",
              values: ["mobile"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "correlator",
              values: ["3805827226282239"],
            },
            {
              __typename: "AppPresentation_AdTargetingParam",
              key: "sess",
              values: ["EF06F2541B344477AA9D355E3A0238B4"],
            },
          ],
        },
      ],
      skippedSections: [],
      mapSections: [
        {
          __typename: "AppPresentation_DynamicMapSection",
          clusterId: "DYNAMIC_MAP",
          trackingKey:
            '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0","mt":"RESTAURANT_SEARCH","sn":"Attractions"}',
          trackingTitle: "DynamicMapSection_DYNAMIC_MAP",
          stableDiffingType: "DynamicMapSection_DYNAMIC_MAP",
          anchor: null,
          center: null,
          pins: [
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_0","ctt":"LOCATION","lid":1803465,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_8886823f-dd9c-4c55-9c7c-6af263a2db22",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "1803465",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.246138,
                longitude: 109.19618,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_1","ctt":"LOCATION","lid":1803466,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_c12cdd2b-be09-4eba-9277-129bebb15c59",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "1803466",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.246058,
                longitude: 109.19603,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_2","ctt":"LOCATION","lid":2233968,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "2233968",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.246428,
                longitude: 109.196106,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_3","ctt":"LOCATION","lid":8536569,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_17998258-0a82-4fbe-9133-1a58ea9eb066",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "8536569",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.243409,
                longitude: 109.19622,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_4","ctt":"LOCATION","lid":1803467,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "1803467",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.246492,
                longitude: 109.19573,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_5","ctt":"LOCATION","lid":6979336,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_2728e3c3-111d-413d-98a0-32f667d331d7",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "6979336",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.244636,
                longitude: 109.19601,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_6","ctt":"LOCATION","lid":19085668,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_58dcec40-99dd-4420-851c-75d9aa007e0a",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "19085668",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.246181,
                longitude: 109.19622,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_7","ctt":"LOCATION","lid":7228037,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_18e3d65d-b5bf-47b8-b7db-e9d4664945c6",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "7228037",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.244723,
                longitude: 109.19628,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_8","ctt":"LOCATION","lid":17750791,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_415e1fad-35b9-4893-8470-4021d1cbd5a6",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "17750791",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.244828,
                longitude: 109.19623,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_9","ctt":"LOCATION","lid":7785935,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_5acc5371-e3f6-4b0c-b730-939f24b46086",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "7785935",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.244251,
                longitude: 109.19626,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_10","ctt":"LOCATION","lid":11827167,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_dc42c9c9-8cbe-43a2-aa00-abf5df0aa18e",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "11827167",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.244063,
                longitude: 109.192375,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_11","ctt":"LOCATION","lid":14116233,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_611d526b-9c9f-440f-8c35-55abe3556a03",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "14116233",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.246465,
                longitude: 109.194046,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_12","ctt":"LOCATION","lid":12357605,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_9bfa7132-0920-4e6f-8243-fa5c55268f6f",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "12357605",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.247722,
                longitude: 109.19603,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_13","ctt":"LOCATION","lid":17713435,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_d65f11d5-2708-4522-a03e-04749c31e657",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "17713435",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.247987,
                longitude: 109.19599,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_14","ctt":"LOCATION","lid":12597557,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_a2d87f4a-6937-4235-8c7a-596a2c8aeb20",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "12597557",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.244069,
                longitude: 109.19241,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_15","ctt":"LOCATION","lid":12340184,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_b6394607-722d-4122-bb22-d4ae4cf9f64d",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "12340184",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.243644,
                longitude: 109.19397,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_16","ctt":"LOCATION","lid":7225437,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_be8367fd-267f-4f6b-a902-2ca490e6185a",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "7225437",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.243505,
                longitude: 109.19388,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_17","ctt":"LOCATION","lid":13325250,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_fee3d8ba-d63d-4818-96dd-cfe37fd0658a",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "13325250",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.244407,
                longitude: 109.19627,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_18","ctt":"LOCATION","lid":14791124,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_e8df3412-140d-40d5-a6ab-60fcef7f6f54",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "14791124",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.244705,
                longitude: 109.19461,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_19","ctt":"LOCATION","lid":4209780,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_3f1993c2-4f39-41d1-be86-70759551ab82",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "4209780",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.24589,
                longitude: 109.19466,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_20","ctt":"LOCATION","lid":14791103,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_201dddfb-267d-480a-9b7d-128f1da7921f",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "14791103",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.244705,
                longitude: 109.19461,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_21","ctt":"LOCATION","lid":16694853,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_a2751f6f-6a3d-40cf-8323-05b38907f9cc",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "16694853",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.247607,
                longitude: 109.192215,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_22","ctt":"LOCATION","lid":19941597,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_eb905040-74cf-4c33-b7d8-8fd369e538b7",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "19941597",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.243632,
                longitude: 109.19625,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_23","ctt":"LOCATION","lid":14791086,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_f5ce2629-57f1-45c5-b944-dcddfd5ab4ab",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "14791086",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.244705,
                longitude: 109.19461,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_24","ctt":"LOCATION","lid":13554230,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_7b8c32a6-cbc5-4f05-889e-ae0086b7a43d",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "13554230",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.244018,
                longitude: 109.194496,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_25","ctt":"LOCATION","lid":19649973,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_2c700646-5679-4767-88d7-2bd635d47f6d",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "19649973",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.24793,
                longitude: 109.19632,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_26","ctt":"LOCATION","lid":8667048,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_4927d484-ee41-4ec6-9e7a-ce455dbfa85d",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "8667048",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.24524,
                longitude: 109.19642,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_27","ctt":"LOCATION","lid":17581501,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_41c5539f-8947-43be-97b6-a4b6d1717d27",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "17581501",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.243503,
                longitude: 109.19306,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_28","ctt":"LOCATION","lid":10832928,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_a1828226-223f-4e9c-a6bd-ca31e5b79856",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "10832928",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.24771,
                longitude: 109.19259,
              },
              fallbackIcon: "RESTAURANT",
            },
            {
              __typename: "AppPresentation_MapPin",
              trackingKey:
                '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_0_29","ctt":"LOCATION","lid":7359136,"mit":"restaurants","sn":"Attractions"}',
              trackingTitle:
                "DynamicMapPinCard_restaurant_f9bc7d08-90ca-4914-9287-9bba5511e466",
              icon: {
                __typename: "AppPresentation_MapPinIcon",
                activeName: "restaurants",
                name: "restaurants-fill",
              },
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "7359136",
                type: "location",
              },
              geoPoint: {
                __typename: "AppPresentation_GeoPoint",
                latitude: 12.247515,
                longitude: 109.194595,
              },
              fallbackIcon: "RESTAURANT",
            },
          ],
        },
        {
          __typename: "AppPresentation_MapCardCarousel",
          stableDiffingType: "MapCarouselSection_MAP_CARD_CAROUSEL",
          trackingKey:
            '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1","mt":"RESTAURANT_SEARCH","sn":"Attractions"}',
          trackingTitle: "MapCarouselSection_MAP_CARD_CAROUSEL",
          clusterId: "MAP_CARD_CAROUSEL",
          content: [
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":5.0,"rc":672,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_0","ctt":"LOCATION","pt":"restaurant","lid":1803465,"pir":1,"mid":593213892,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_8886823f-dd9c-4c55-9c7c-6af263a2db22",
              stableDiffingType:
                "PoiMapCard_restaurant_8886823f-dd9c-4c55-9c7c-6af263a2db22",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "1803465",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Feast",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Seafood • International • Asian",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 999,
                  maxWidth: 1500,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5b/b9/c4/seafood-buffet.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "672",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=8886823f-dd9c-4c55-9c7c-6af263a2db22",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=8886823f-dd9c-4c55-9c7c-6af263a2db22",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "8886823f-dd9c-4c55-9c7c-6af263a2db22",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Feast",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":5.0,"rc":501,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_1","ctt":"LOCATION","pt":"restaurant","lid":1803466,"pir":2,"mid":593224730,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_c12cdd2b-be09-4eba-9277-129bebb15c59",
              stableDiffingType:
                "PoiMapCard_restaurant_c12cdd2b-be09-4eba-9277-129bebb15c59",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "1803466",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "& More by Sheraton",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Bar • Cafe • International",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 999,
                  maxWidth: 1500,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5b/e4/1a/more-by-sheraton.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "501",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=c12cdd2b-be09-4eba-9277-129bebb15c59",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=c12cdd2b-be09-4eba-9277-129bebb15c59",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "c12cdd2b-be09-4eba-9277-129bebb15c59",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for & More by Sheraton",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.5,"rc":754,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_2","ctt":"LOCATION","pt":"restaurant","lid":2233968,"pir":3,"mid":594281821,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
              stableDiffingType:
                "PoiMapCard_restaurant_aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "2233968",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Altitude Rooftop Bar",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Bar • European • Gastropub",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 999,
                  maxWidth: 1500,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/6c/05/5d/altitude-rooftop-bar.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4.5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "754",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "aaec9bbb-f0df-4204-832e-e4c1a4d9f0d9",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Altitude Rooftop Bar",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.5,"rc":2798,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_3","ctt":"LOCATION","pt":"restaurant","lid":8536569,"pir":5,"mid":196174187,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_17998258-0a82-4fbe-9133-1a58ea9eb066",
              stableDiffingType:
                "PoiMapCard_restaurant_17998258-0a82-4fbe-9133-1a58ea9eb066",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "8536569",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Skylight Nha Trang",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Seafood • International • Fusion",
              },
              secondaryInfo: null,
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 1349,
                  maxWidth: 1800,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/b1/61/6b/360-of-nha-trang.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4.5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "2,798",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=17998258-0a82-4fbe-9133-1a58ea9eb066",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=17998258-0a82-4fbe-9133-1a58ea9eb066",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "17998258-0a82-4fbe-9133-1a58ea9eb066",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Skylight Nha Trang",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.5,"rc":391,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_4","ctt":"LOCATION","pt":"restaurant","lid":1803467,"pir":13,"mid":409857073,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
              stableDiffingType:
                "PoiMapCard_restaurant_a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "1803467",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Steam 'n' Spice",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Contemporary • Singaporean • Hong Kong",
              },
              secondaryInfo: null,
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 1600,
                  maxWidth: 2400,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/6d/ec/31/sns-dinner.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4.5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "391",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "a1c6814a-0e8a-4bb6-846e-ef11e9f0fa4f",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Steam 'n' Spice",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.5,"rc":330,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_5","ctt":"LOCATION","pt":"restaurant","lid":6979336,"pir":22,"mid":277112395,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_2728e3c3-111d-413d-98a0-32f667d331d7",
              stableDiffingType:
                "PoiMapCard_restaurant_2728e3c3-111d-413d-98a0-32f667d331d7",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "6979336",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Cookbook Cafe",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$$$ • Seafood • International • European",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 1333,
                  maxWidth: 2000,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/84/66/4b/the-dessert-section-for.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4.5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "330",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=2728e3c3-111d-413d-98a0-32f667d331d7",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=2728e3c3-111d-413d-98a0-32f667d331d7",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "2728e3c3-111d-413d-98a0-32f667d331d7",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Cookbook Cafe",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.5,"rc":116,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_6","ctt":"LOCATION","pt":"restaurant","lid":19085668,"pir":42,"mid":442997144,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_58dcec40-99dd-4420-851c-75d9aa007e0a",
              stableDiffingType:
                "PoiMapCard_restaurant_58dcec40-99dd-4420-851c-75d9aa007e0a",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "19085668",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Pizza 4P’s Nha Trang – NT",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Italian • Pizza • Gastropub",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 1500,
                  maxWidth: 2250,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/67/99/98/burrata-parma-ham-pizza.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4.5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "116",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=58dcec40-99dd-4420-851c-75d9aa007e0a",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=58dcec40-99dd-4420-851c-75d9aa007e0a",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "58dcec40-99dd-4420-851c-75d9aa007e0a",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Pizza 4P’s Nha Trang – NT",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.0,"rc":369,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_7","ctt":"LOCATION","pt":"restaurant","lid":7228037,"pir":49,"mid":118398120,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_18e3d65d-b5bf-47b8-b7db-e9d4664945c6",
              stableDiffingType:
                "PoiMapCard_restaurant_18e3d65d-b5bf-47b8-b7db-e9d4664945c6",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "7228037",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Costa Seafood Restaurant",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Seafood • Asian • Fusion",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 533,
                  maxWidth: 800,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/0e/9c/a8/costa-seafood-restaurant.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "369",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=18e3d65d-b5bf-47b8-b7db-e9d4664945c6",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=18e3d65d-b5bf-47b8-b7db-e9d4664945c6",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "18e3d65d-b5bf-47b8-b7db-e9d4664945c6",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Costa Seafood Restaurant",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":5.0,"rc":40,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_8","ctt":"LOCATION","pt":"restaurant","lid":17750791,"pir":56,"mid":432794900,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_415e1fad-35b9-4893-8470-4021d1cbd5a6",
              stableDiffingType:
                "PoiMapCard_restaurant_415e1fad-35b9-4893-8470-4021d1cbd5a6",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "17750791",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Costa Robata Nha Trang - Japanese restaurant",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Japanese • Brew Pub • Seafood",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 2410,
                  maxWidth: 3615,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/cb/ed/14/take-delight-in-our-exclusive.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "40",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=415e1fad-35b9-4893-8470-4021d1cbd5a6",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=415e1fad-35b9-4893-8470-4021d1cbd5a6",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "415e1fad-35b9-4893-8470-4021d1cbd5a6",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string:
                    "View details for Costa Robata Nha Trang - Japanese restaurant",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.0,"rc":342,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_9","ctt":"LOCATION","pt":"restaurant","lid":7785935,"pir":62,"mid":319693880,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_5acc5371-e3f6-4b0c-b730-939f24b46086",
              stableDiffingType:
                "PoiMapCard_restaurant_5acc5371-e3f6-4b0c-b730-939f24b46086",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "7785935",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "RuNam Bistro",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Cafe • Asian • Vietnamese",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 1333,
                  maxWidth: 2000,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/0e/24/38/qu-y-bar-m-t-trong-nh.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "342",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=5acc5371-e3f6-4b0c-b730-939f24b46086",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=5acc5371-e3f6-4b0c-b730-939f24b46086",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "5acc5371-e3f6-4b0c-b730-939f24b46086",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for RuNam Bistro",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.0,"rc":117,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_10","ctt":"LOCATION","pt":"restaurant","lid":11827167,"pir":67,"mid":182748143,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_dc42c9c9-8cbe-43a2-aa00-abf5df0aa18e",
              stableDiffingType:
                "PoiMapCard_restaurant_dc42c9c9-8cbe-43a2-aa00-abf5df0aa18e",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "11827167",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Pho Hong Giang",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$ • Fast Food • Asian • Vietnamese",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 1236,
                  maxWidth: 1236,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/e4/83/ef/bun-bo-hue.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "117",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=dc42c9c9-8cbe-43a2-aa00-abf5df0aa18e",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=dc42c9c9-8cbe-43a2-aa00-abf5df0aa18e",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "dc42c9c9-8cbe-43a2-aa00-abf5df0aa18e",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Pho Hong Giang",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.5,"rc":41,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_11","ctt":"LOCATION","pt":"restaurant","lid":14116233,"pir":69,"mid":471698254,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_611d526b-9c9f-440f-8c35-55abe3556a03",
              stableDiffingType:
                "PoiMapCard_restaurant_611d526b-9c9f-440f-8c35-55abe3556a03",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "14116233",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Quan Com Chuon Chuon Kim",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Asian • Vietnamese • Vegetarian Friendly",
              },
              secondaryInfo: null,
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 1536,
                  maxWidth: 2048,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/1d/8b/4e/this-is-so-pretty.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4.5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "41",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=611d526b-9c9f-440f-8c35-55abe3556a03",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=611d526b-9c9f-440f-8c35-55abe3556a03",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "611d526b-9c9f-440f-8c35-55abe3556a03",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Quan Com Chuon Chuon Kim",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.0,"rc":61,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_12","ctt":"LOCATION","pt":"restaurant","lid":12357605,"pir":83,"mid":426799964,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_9bfa7132-0920-4e6f-8243-fa5c55268f6f",
              stableDiffingType:
                "PoiMapCard_restaurant_9bfa7132-0920-4e6f-8243-fa5c55268f6f",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "12357605",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Hokkaido Ramen Restaurant",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$ • Japanese • Sushi • Asian",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 2048,
                  maxWidth: 1536,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/70/73/5c/photo0jpg.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "61",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=9bfa7132-0920-4e6f-8243-fa5c55268f6f",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=9bfa7132-0920-4e6f-8243-fa5c55268f6f",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "9bfa7132-0920-4e6f-8243-fa5c55268f6f",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Hokkaido Ramen Restaurant",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":5.0,"rc":24,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_13","ctt":"LOCATION","pt":"restaurant","lid":17713435,"pir":89,"mid":436429334,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_d65f11d5-2708-4522-a03e-04749c31e657",
              stableDiffingType:
                "PoiMapCard_restaurant_d65f11d5-2708-4522-a03e-04749c31e657",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "17713435",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Vandana Authentic Indian Cusine",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$ • Quick Bites • Indian • Asian",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 1079,
                  maxWidth: 1079,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/03/62/16/happy-customers.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "24",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=d65f11d5-2708-4522-a03e-04749c31e657",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=d65f11d5-2708-4522-a03e-04749c31e657",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "d65f11d5-2708-4522-a03e-04749c31e657",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Vandana Authentic Indian Cusine",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.0,"rc":80,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_14","ctt":"LOCATION","pt":"restaurant","lid":12597557,"pir":90,"mid":358357459,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_a2d87f4a-6937-4235-8c7a-596a2c8aeb20",
              stableDiffingType:
                "PoiMapCard_restaurant_a2d87f4a-6937-4235-8c7a-596a2c8aeb20",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "12597557",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Pho Hong",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$ • Asian • Vietnamese • Soups",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 2048,
                  maxWidth: 2048,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/5c/19/d3/photo0jpg.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "80",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=a2d87f4a-6937-4235-8c7a-596a2c8aeb20",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=a2d87f4a-6937-4235-8c7a-596a2c8aeb20",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "a2d87f4a-6937-4235-8c7a-596a2c8aeb20",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Pho Hong",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.0,"rc":32,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_15","ctt":"LOCATION","pt":"restaurant","lid":12340184,"pir":130,"mid":349527473,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_b6394607-722d-4122-bb22-d4ae4cf9f64d",
              stableDiffingType:
                "PoiMapCard_restaurant_b6394607-722d-4122-bb22-d4ae4cf9f64d",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "12340184",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Yuki Sushi Nha Trang",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Japanese • Sushi • Asian",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 630,
                  maxWidth: 1024,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/d5/5d/b1/unagi-sushi.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "32",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=b6394607-722d-4122-bb22-d4ae4cf9f64d",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=b6394607-722d-4122-bb22-d4ae4cf9f64d",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "b6394607-722d-4122-bb22-d4ae4cf9f64d",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Yuki Sushi Nha Trang",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.0,"rc":54,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_16","ctt":"LOCATION","pt":"restaurant","lid":7225437,"pir":139,"mid":143644908,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_be8367fd-267f-4f6b-a902-2ca490e6185a",
              stableDiffingType:
                "PoiMapCard_restaurant_be8367fd-267f-4f6b-a902-2ca490e6185a",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "7225437",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "V-Smile",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$ • Vietnamese",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 593,
                  maxWidth: 960,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/8f/d8/ec/good.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "54",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=be8367fd-267f-4f6b-a902-2ca490e6185a",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=be8367fd-267f-4f6b-a902-2ca490e6185a",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "be8367fd-267f-4f6b-a902-2ca490e6185a",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for V-Smile",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.0,"rc":43,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_17","ctt":"LOCATION","pt":"restaurant","lid":13325250,"pir":150,"mid":377929769,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_fee3d8ba-d63d-4818-96dd-cfe37fd0658a",
              stableDiffingType:
                "PoiMapCard_restaurant_fee3d8ba-d63d-4818-96dd-cfe37fd0658a",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "13325250",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Cafe Terrace",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Italian • French • Asian",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 1536,
                  maxWidth: 2048,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/86/c0/29/photo1jpg.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "43",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=fee3d8ba-d63d-4818-96dd-cfe37fd0658a",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=fee3d8ba-d63d-4818-96dd-cfe37fd0658a",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "fee3d8ba-d63d-4818-96dd-cfe37fd0658a",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Cafe Terrace",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":5.0,"rc":8,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_18","ctt":"LOCATION","pt":"restaurant","lid":14791124,"pir":158,"mid":328644442,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_e8df3412-140d-40d5-a6ab-60fcef7f6f54",
              stableDiffingType:
                "PoiMapCard_restaurant_e8df3412-140d-40d5-a6ab-60fcef7f6f54",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "14791124",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Kichi Kichi Ariyana Nha Trang",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$ • Japanese",
              },
              secondaryInfo: null,
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 960,
                  maxWidth: 638,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/96/b7/5a/getlstd-property-photo.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "8",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=e8df3412-140d-40d5-a6ab-60fcef7f6f54",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=e8df3412-140d-40d5-a6ab-60fcef7f6f54",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "e8df3412-140d-40d5-a6ab-60fcef7f6f54",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Kichi Kichi Ariyana Nha Trang",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.0,"rc":24,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_19","ctt":"LOCATION","pt":"restaurant","lid":4209780,"pir":168,"mid":144425158,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_3f1993c2-4f39-41d1-be86-70759551ab82",
              stableDiffingType:
                "PoiMapCard_restaurant_3f1993c2-4f39-41d1-be86-70759551ab82",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "4209780",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Hai Au Restaurant",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • International",
              },
              secondaryInfo: null,
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 2448,
                  maxWidth: 3264,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/9b/c0/c6/caption.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "24",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=3f1993c2-4f39-41d1-be86-70759551ab82",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=3f1993c2-4f39-41d1-be86-70759551ab82",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "3f1993c2-4f39-41d1-be86-70759551ab82",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Hai Au Restaurant",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.5,"rc":11,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_20","ctt":"LOCATION","pt":"restaurant","lid":14791103,"pir":181,"mid":328643620,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_201dddfb-267d-480a-9b7d-128f1da7921f",
              stableDiffingType:
                "PoiMapCard_restaurant_201dddfb-267d-480a-9b7d-128f1da7921f",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "14791103",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Hutong Ariyana Nha Trang",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Chinese",
              },
              secondaryInfo: null,
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 720,
                  maxWidth: 960,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/96/b4/24/getlstd-property-photo.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4.5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "11",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=201dddfb-267d-480a-9b7d-128f1da7921f",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=201dddfb-267d-480a-9b7d-128f1da7921f",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "201dddfb-267d-480a-9b7d-128f1da7921f",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Hutong Ariyana Nha Trang",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.5,"rc":8,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_21","ctt":"LOCATION","pt":"restaurant","lid":16694853,"pir":195,"mid":489292478,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_a2751f6f-6a3d-40cf-8323-05b38907f9cc",
              stableDiffingType:
                "PoiMapCard_restaurant_a2751f6f-6a3d-40cf-8323-05b38907f9cc",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "16694853",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Pho Ly Quoc Su - Nha Trang",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$ • Fusion • Vietnamese",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 426,
                  maxWidth: 766,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/2a/02/be/opening-hours.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4.5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "8",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=a2751f6f-6a3d-40cf-8323-05b38907f9cc",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=a2751f6f-6a3d-40cf-8323-05b38907f9cc",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "a2751f6f-6a3d-40cf-8323-05b38907f9cc",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Pho Ly Quoc Su - Nha Trang",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":5.0,"rc":4,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_22","ctt":"LOCATION","pt":"restaurant","lid":19941597,"pir":227,"mid":447481913,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_eb905040-74cf-4c33-b7d8-8fd369e538b7",
              stableDiffingType:
                "PoiMapCard_restaurant_eb905040-74cf-4c33-b7d8-8fd369e538b7",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "19941597",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "An Bistro",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Vietnamese",
              },
              secondaryInfo: null,
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 800,
                  maxWidth: 800,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ac/08/39/getlstd-property-photo.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "4",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=eb905040-74cf-4c33-b7d8-8fd369e538b7",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=eb905040-74cf-4c33-b7d8-8fd369e538b7",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "eb905040-74cf-4c33-b7d8-8fd369e538b7",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for An Bistro",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":3.5,"rc":18,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_23","ctt":"LOCATION","pt":"restaurant","lid":14791086,"pir":258,"mid":328639241,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_f5ce2629-57f1-45c5-b944-dcddfd5ab4ab",
              stableDiffingType:
                "PoiMapCard_restaurant_f5ce2629-57f1-45c5-b944-dcddfd5ab4ab",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "14791086",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Sumo BBQ",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Japanese • Barbecue",
              },
              secondaryInfo: null,
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 330,
                  maxWidth: 576,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/96/a3/09/getlstd-property-photo.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 3.5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "18",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=f5ce2629-57f1-45c5-b944-dcddfd5ab4ab",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=f5ce2629-57f1-45c5-b944-dcddfd5ab4ab",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "f5ce2629-57f1-45c5-b944-dcddfd5ab4ab",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Sumo BBQ",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.0,"rc":16,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_24","ctt":"LOCATION","pt":"restaurant","lid":13554230,"pir":276,"mid":328635623,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_7b8c32a6-cbc5-4f05-889e-ae0086b7a43d",
              stableDiffingType:
                "PoiMapCard_restaurant_7b8c32a6-cbc5-4f05-889e-ae0086b7a43d",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "13554230",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Crystal Jade Kitchen",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Chinese • Asian",
              },
              secondaryInfo: null,
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 3648,
                  maxWidth: 5472,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/96/94/e7/getlstd-property-photo.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "16",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=7b8c32a6-cbc5-4f05-889e-ae0086b7a43d",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=7b8c32a6-cbc5-4f05-889e-ae0086b7a43d",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "7b8c32a6-cbc5-4f05-889e-ae0086b7a43d",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Crystal Jade Kitchen",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":5.0,"rc":2,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_25","ctt":"LOCATION","pt":"restaurant","lid":19649973,"pir":295,"mid":440629538,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_2c700646-5679-4767-88d7-2bd635d47f6d",
              stableDiffingType:
                "PoiMapCard_restaurant_2c700646-5679-4767-88d7-2bd635d47f6d",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "19649973",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Pho Bo 45 Tran Phu",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$ • Asian • Vietnamese",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 432,
                  maxWidth: 650,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/43/79/22/ph-bo-45-tr-n-phu.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "2",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=2c700646-5679-4767-88d7-2bd635d47f6d",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=2c700646-5679-4767-88d7-2bd635d47f6d",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "2c700646-5679-4767-88d7-2bd635d47f6d",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Pho Bo 45 Tran Phu",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.0,"rc":9,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_26","ctt":"LOCATION","pt":"restaurant","lid":8667048,"pir":309,"mid":161890868,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_4927d484-ee41-4ec6-9e7a-ce455dbfa85d",
              stableDiffingType:
                "PoiMapCard_restaurant_4927d484-ee41-4ec6-9e7a-ce455dbfa85d",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "8667048",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Hai Minh Restaurant",
                debugValueKey: null,
              },
              primaryInfo: null,
              secondaryInfo: null,
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 1500,
                  maxWidth: 2000,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/a6/42/34/hai-minh-restaurant.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "9",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=4927d484-ee41-4ec6-9e7a-ce455dbfa85d",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=4927d484-ee41-4ec6-9e7a-ce455dbfa85d",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "4927d484-ee41-4ec6-9e7a-ce455dbfa85d",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Hai Minh Restaurant",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":4.0,"rc":5,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_27","ctt":"LOCATION","pt":"restaurant","lid":17581501,"pir":322,"mid":430469957,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_41c5539f-8947-43be-97b6-a4b6d1717d27",
              stableDiffingType:
                "PoiMapCard_restaurant_41c5539f-8947-43be-97b6-a4b6d1717d27",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "17581501",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Lang Ngon Corner - Vietnamese Cuisine",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$ • Vietnamese",
              },
              secondaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "Open now",
              },
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 1367,
                  maxWidth: 2048,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/a8/73/45/lang-ngon-corner-t-ng.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 4,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "5",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=41c5539f-8947-43be-97b6-a4b6d1717d27",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=41c5539f-8947-43be-97b6-a4b6d1717d27",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "41c5539f-8947-43be-97b6-a4b6d1717d27",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string:
                    "View details for Lang Ngon Corner - Vietnamese Cuisine",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":3.5,"rc":8,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_28","ctt":"LOCATION","pt":"restaurant","lid":10832928,"pir":328,"mid":309139066,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_a1828226-223f-4e9c-a6bd-ca31e5b79856",
              stableDiffingType:
                "PoiMapCard_restaurant_a1828226-223f-4e9c-a6bd-ca31e5b79856",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "10832928",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Com Tam Truong Tau Restaurant",
                debugValueKey: null,
              },
              primaryInfo: null,
              secondaryInfo: null,
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 2000,
                  maxWidth: 1500,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/6d/16/7a/broken-rice-dish.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 3.5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "8",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=a1828226-223f-4e9c-a6bd-ca31e5b79856",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=a1828226-223f-4e9c-a6bd-ca31e5b79856",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "a1828226-223f-4e9c-a6bd-ca31e5b79856",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Com Tam Truong Tau Restaurant",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
            {
              __typename: "AppPresentation_HorizontalMerchandisingCard",
              badge: null,
              trackingKey:
                '{"br":3.5,"rc":24,"ik":"47d15468-ba0a-4074-a391-06c229ecaba6_map_1_29","ctt":"LOCATION","pt":"restaurant","lid":7359136,"pir":361,"mid":127216545,"sn":"Attractions"}',
              trackingTitle:
                "PoiMapCard_restaurant_f9bc7d08-90ca-4914-9287-9bba5511e466",
              stableDiffingType:
                "PoiMapCard_restaurant_f9bc7d08-90ca-4914-9287-9bba5511e466",
              isSaved: false,
              saveId: {
                __typename: "Trips_ReferenceV2",
                id: "7359136",
                type: "location",
              },
              cardTitle: {
                __typename: "AppPresentation_LocalizedString",
                string: "Goc Tien",
                debugValueKey: null,
              },
              primaryInfo: {
                __typename: "AppPresentation_JoinedLocalizableObjects",
                text: "$$ - $$$",
              },
              secondaryInfo: null,
              cardPhoto: {
                __typename: "AppPresentation_PhotoItem",
                sizes: {
                  __typename: "AppPresentation_PhotoItemSizeDynamic",
                  maxHeight: 1161,
                  maxWidth: 2064,
                  urlTemplate:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/95/2b/a1/caption.jpg?w={width}&h={height}&s=1",
                },
              },
              bubbleRating: {
                __typename: "AppPresentation_BubbleRating",
                rating: 3.5,
                numberReviews: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "24",
                  debugValueKey: null,
                },
              },
              distance: null,
              labels: [],
              descriptiveText: null,
              cardLink: {
                __typename: "AppPresentation_InternalLink",
                route: {
                  __typename: "Routing_Route",
                  fragment: null,
                  page: "AppDetail",
                  url: "/AppDetail?contentType=restaurant&contentId=f9bc7d08-90ca-4914-9287-9bba5511e466",
                  nonCanonicalUrl:
                    "/AppDetail?contentType=restaurant&contentId=f9bc7d08-90ca-4914-9287-9bba5511e466",
                  typedParams: {
                    __typename: "Routing_AppDetailParameters",
                    contentId: "f9bc7d08-90ca-4914-9287-9bba5511e466",
                    contentType: "restaurant",
                    spAttributionToken: null,
                  },
                },
                webviewRoute: null,
                text: null,
                accessibilityString: {
                  __typename: "AppPresentation_LocalizedString",
                  string: "View details for Goc Tien",
                  debugValueKey: null,
                },
                trackingContext: "server_card",
              },
              merchandisingText: null,
              commerceButtons: null,
            },
          ],
        },
      ],
      impressions: [
        {
          __typename: "AppPresentation_ImpressionLog",
          data: "noClientLog",
        },
      ],
      status: {
        __typename: "AppPresentation_QueryResponseStatus",
        message: null,
        success: true,
        pollingStatus: null,
      },
      commerce: {
        __typename: "AppPresentation_CommerceParameters",
        attractionCommerce: {
          __typename: "AppPresentation_AttractionCommerceParameters",
          setByUser: false,
          updated: null,
          startDate: "2022-05-24",
          endDate: "2022-05-25",
          pax: [
            {
              __typename: "AppPresentation_AgeBandSelection",
              count: 2,
              ageBand: "ADULT",
              endAge: null,
              maxTravelersPerBooking: null,
              minTravelersPerBooking: null,
              startAge: null,
            },
          ],
        },
        hotelCommerce: {
          __typename: "AppPresentation_HotelCommerceParameters",
          setByUser: false,
          updated: null,
          checkIn: "2022-05-23",
          checkOut: "2022-05-24",
          rooms: [
            {
              __typename: "AppPresentation_HotelRoom",
              adults: 2,
              childrenAges: [],
            },
          ],
        },
        restaurantCommerce: {
          __typename: "AppPresentation_RestaurantCommerceParameters",
          setByUser: false,
          updated: null,
          partySize: 2,
          reservationTime: "2022-05-23T20:00:00",
        },
        lastUpdated: "2022-05-23T07:50:28.919259-04:00",
      },
      updatedClusterIds: [],
      trackingKey:
        '{"ik":"47d15468-ba0a-4074-a391-06c229ecaba6","lid":293928,"sn":"Attractions"}',
    },
  ],
};

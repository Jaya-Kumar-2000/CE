var chart_js = {
	"metadata": {
		"axes": {
			"x": [
				0
			],
			"y": [
				[
					1
				]
			],
			"tooltip": [
				0,
				1
			]
		},
		"columns": [
			{
				"dataindex": 0,
				"columnname": "Year(Date)",
				"datatype": "time",
				"time": {
					"inputformat": "customInputFormat",
					"subfunction": "YEAR"
				}
			},
			{
				"dataindex": 1,
				"columnname": "Sum(Sales)",
				"datatype": "numeric"
			}
		]
	},
	"seriesdata": {
		"chartdata": [
			{
				"type": "area",
				"data": [
					[
						[
							1262284200000,
							10.08
						],
						[
							1293820200000,
							10.28
						],
						[
							1325356200000,
							25.21
						],
						[
							1356978600000,
							9.57
						],
						[
							1388514600000,
							9.57
						],
						[
							1420050600000,
							17.92
						]
					]
				]
			}
		]
	},
	"chart": {
		"plot": {
			"plotoptions": {
				"area": {
					"fillopacity": 0.9,
					"strokeWidth": 3,
					"marker": {
						"enabled": false,
						"size": 2,
						"innerStrokeWidth": 0,
						"outerStrokeWidth": 2,
						"outerFillColor": "white",
						"outerStrokeOpacity": 0,
						"innerFillColor": null
					},
                  "mode": "monotone",
                  "fillColor" : "#d7ffea"  
				}
			}
		},
		"axes": {
			"rotated": false,
			"xaxis": {
				"label": {
					"text": "Year(Date)"
				},
				"ticklabel": {
					"alignMode": "rotate"
				},
				"show": false
			},
			"yaxis": [
				{
					"label": {
						"text": "Sum(Sales)"
					},
					"show": false
				}
			]
		}
	},
	"canvas": {
		"title": {
			"show": false,
			"text": "Single series - Vertical"
		},
		"subtitle": {
			"show": false
		},
		"border": {
			"show": false,
			"color": "#D67373"
		},
		"shadow": {
			"show": false
		}
	},
	"legend": {
		"layout": "vertical",
		"colors": [
			"green"
		],
		"itemHoverStyle": {
			"type": "line"
		}
	},
	"tooltip": {
		"borderStyle": "line"
	}
}

var chartObj = new $ZC.charts(T_chart, chart_js);
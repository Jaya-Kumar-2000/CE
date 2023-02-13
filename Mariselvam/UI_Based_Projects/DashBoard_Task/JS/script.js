var chart_js ={
	"legend": {
        "color":[
            "#ff9ad5","#01d7ff", "#5a65dc"
        ],
		"layout": "vertical",
		"enabled": false
	},
	"chart": {
		"plot": {
			"plotoptions": {
				"pie": {
					"innerRadius": "65%",
					"marker": {
						"enabled": false
					}
				}
			}
		}
	},
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
				"type": "pie",
				"data": [
					[
						[
							"2010",
							602394.08
						],
						[
							"2011",
							309824.28
						],
						[
							"2012",
							152304.21
						]
					]
				]
			}
		]
	},
	"canvas": {
		"title": {
			"show": false,
			"text": "Simple donut"
		},
		"subtitle": {
			"show": false
		},
		"border": {
			"show": false
		},
		"shadow": {
			"show": false
		}
	},
	"map": {
		"labels": {
			"show": false,
			"fontSize": 10
		}
	}
}

var Chart_Obj = new $ZC.charts(chart_view,chart_js)
var chart_js = {
	"legend": {
		"layout": "vertical"
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
							225881.08
						],
						[
							"2011",
							297103.28
						],
						[
							"2012",
							338301.21
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
			"show": false
		}
	}
}

var Chart_Obj = new $ZC.charts(DB-Session_Devices_chart_view,chart_js)
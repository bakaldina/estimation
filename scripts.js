var chart = AmCharts.makeChart("chartdiv", {
    type: "serial",
    theme: "light",
    legend: {
    //   horizontalGap: 10,
    //   maxColumns: 1,
    //   position: "right",
    //   useGraphSettings: true,
    //   markerSize: 10
    autoMargins: false,
    equalWidths: true,
    horizontalGap: 10,
    markerSize: 10,
    useGraphSettings: true,
    valueWidth: 0
    },
    dataProvider: [
      {
        year: 2004,
        resources: 42,
        federal: 5.2,
        subject: 0
      },
      {
        year: 2005,
        resources: 62,
        federal: 10.7,
        subject: 0
      },
      {
        year: 2006,
        resources: 94,
        federal: 16.4,
        subject: 0
      },
      {
        year: 2007,
        resources: 149.1,
        federal: 19.7,
        subject: 2.2
      },
      {
        year: 2008,
        resources: 199.5,
        federal: 22.0,
        subject: 3.6
      },
      {
        year: 2009,
        resources: 145.7,
        federal: 18.9,
        subject: 1.3
      },
      {
        year: 2010,
        resources: 169.8,
        federal: 20.6,
        subject: 0.6
      },
      {
        year: 2011,
        resources: 204.6,
        federal: 20.0,
        subject: 0.1
      },
      {
        year: 2012,
        resources: 224.1,
        federal: 27.0,
        subject: 0.1
      },
      {
        year: 2013,
        resources: 242.4,
        federal: 32.1,
        subject: 0.1
      },
      {
        year: 2014,
        resources: 345.5,
        federal: 25.7,
        subject: 0.2
      },
      {
        year: 2015,
        resources: 299.0,
        federal: 33.4,
        subject: 0
      },
      {
        year: 2016,
        resources: 295.0,
        federal: 33.4,
        subject: 0
      }
    ],
    valueAxes: [
      {
        stackType: "regular",
        title: "млрд.",
        axisAlpha: 1,
        gridAlpha: 0
      }
    ],
    graphs: [
      {
        balloonText:
          "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b> <b>млрд</b></span>",
        fillAlphas: 0.8,
        lineAlpha: 0.3,
        title: "Средства недропользователей",
        type: "column",
        color: "#000000",
        valueField: "resources"
      },
      {
        balloonText:
          "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b> <b>млрд</b></span>",
        fillAlphas: 0.8,
        lineAlpha: 0.3,
        title: "Федеральный бюджет",
        type: "column",
        color: "#000000",
        valueField: "federal"
      },
      {
        balloonText:
          "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b> <b>млрд</b></span>",
        fillAlphas: 0.8,
        lineAlpha: 0.3,
        title: "Бюджет субъектов РФ",
        type: "column",
        color: "#000000",
        valueField: "subject"
      }
    ],
    categoryField: "year",
    categoryAxis: {
      gridPosition: "start",
      axisAlpha: 1,
      gridAlpha: 0,
      position: "left"
    },
    export: {
      enabled: true
    }
  });
  var chart = AmCharts.makeChart( "chartdiv1", {
    "type": "serial",
    "addClassNames": true,
    "theme": "light",
    "autoMargins": false,
    "marginLeft": 70,
    "marginRight": 18,
    "marginTop": 10,
    "marginBottom": 26,
    "balloon": {
      "horizontalPadding": 10,
      "verticalPadding": 8,
      "color": "#000"
    },
    "legend": {
        // "horizontalGap": 10,
        // "maxColumns": 1,
        // "position": "right",
        // "useGraphSettings": true,
        // "markerSize": 10
        "autoMargins": false,
        "equalWidths": true,
        "horizontalGap": 10,
        "markerSize": 10,
        "useGraphSettings": true,
        "valueWidth": 0
      },
    "dataProvider": [ {
      "year": 1997,
      "income": 144,
      "expenses": 102
    }, {
      "year": 1998,
      "income": 144,
      "expenses": 89
    }, {
      "year": 1999,
      "income": 146,
      "expenses": 51
    }, {
      "year": 2000,
      "income": 143,
      "expenses": 62
    }, {
      "year": 2001,
      "income": 189,
      "expenses": 91
    }, {
        "year": 2002,
        "income": 197,
        "expenses": 183
      }, {
        "year": 2003,
        "income": 201,
        "expenses": 98
      },{
        "year": 2004,
        "income": 199,
        "expenses": 121
      },{
        "year": 2005,
        "income": 186,
        "expenses": 148
      },{
        "year": 2006,
        "income": 213,
        "expenses": 1583
      },{
        "year": 2007,
        "income": 201,
        "expenses": 171
      },{
        "year": 2008,
        "income": 190.4,
        "expenses": 419
      },{
        "year": 2009,
        "income": 235.1,
        "expenses": 261
      },{
        "year": 2010,
        "income": 265.5,
        "expenses": 280
      },{
        "year": 2011,
        "income": 262.2,
        "expenses": 382.6
      },{
        "year": 2012,
        "income": 260.7,
        "expenses": 284.7
      },{
        "year": 2013,
        "income": 324,
        "expenses": 302.3
      },{
        "year": 2014,
        "income": 311.8,
        "expenses": 278.9
      },{
        "year": 2015,
        "income": 286.6,
        "expenses": 472.5
      },{
        "year": 2016,
        "income": 324,
        "expenses": 428
      } ],
    "valueAxes": [ {
      "stackType": "regular",
      "axisAlpha": 1,
      "gridAlpha": 0,
      "title": "тонн."
    } ],
    "startDuration": 1,
    "graphs": [ {
      "alphaField": "alpha",
      "balloonText": "<span style='font-size:12px;'>[[title]] в [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
      "fillAlphas": 0.8,
      "lineAlpha": 0.3,
      "title": "Объем добычи в тоннах",
      "type": "column",
      "valueField": "income",
      "dashLengthField": "dashLengthColumn"
    }, {
      "id": "graph2",
      "balloonText": "<span style='font-size:12px;'>[[title]] в [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
      "bullet": "round",
      "lineThickness": 3,
      "bulletSize": 7,
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "useLineColorForBulletBorder": true,
      "bulletBorderThickness": 3,
      "fillAlphas": 0,
      "lineAlpha": 1,
      "title": "Объем приращенных запасов (ABC1) <br> в тоннах",
      "valueField": "expenses",
      "dashLengthField": "dashLengthLine"
    } ],
    "categoryField": "year",
    "categoryAxis": {
      "gridPosition": "start",
      "axisAlpha": 1,
      "gridAlpha": 0,
      "tickLength": 1
    },
    "export": {
      "enabled": true
    }
  });
$(document).ready(function () {
      $("#userInfo").on("click", function () {
      $(this).closest("li").toggleClass("active");
  });

  $("#menu_icon").on("click", function () {
      $(this).closest(".header_menu").toggleClass("active");
      return false;
  });

  var $button1 = document.querySelector(".button-1"),
  $container1 = document.querySelector(".container-1"),
  $button2 = document.querySelector(".button-2"),
  $container2 = document.querySelector(".container-2");

    $button1.addEventListener("click", function() {
    $container1.classList.add("active");
    $container2.classList.remove("active");

    $button1.classList.add("active");
    $button2.classList.remove("active");
    });

    $button2.addEventListener("click", function() {
    $container1.classList.remove("active");
    $container2.classList.add("active");

    $button1.classList.remove("active");
    $button2.classList.add("active");
    });

});


  
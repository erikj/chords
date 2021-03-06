$(function () { 
    $('#chart_data_gets').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: null
        },
        legend: {
            enabled: false
        },
        yAxis: {
        	min: 0,
            title: {
                text: 'Data Gets'
            }
        },
        series: [{
            name: 'rate',
            color: 'firebrick',
            data: [
            342, 837, 100, 738, 493, 529, 527, 349, 459, 34, 50, 447, 30, 430, 496, 
            161, 188, 370, 450, 712, 740, 215, 651, 641, 292, 400, 439, 679, 242, 
            785, 695, 809, 121, 687, 252, 316, 412, 359, 161, 541, 237, 375, 442, 
            793, 22, 360, 178, 143, 616, 102, 732, 545, 24, 689, 372, 562, 641, 817, 
            650, 855, 772, 576, 738, 635, 688, 36, 223, 231, 700, 596, 771, 759, 238,
            190, 137, 568, 68, 559, 367, 570, 473, 221, 807, 546, 756, 222, 793, 277, 
            406, 659, 597, 742, 239, 81, 290, 227, 523, 654, 678, 452, 478, 824, 375, 
            529, 210, 82, 104, 226, 353, 714, 391, 669, 361, 76, 236, 78, 599, 772, 
            701, 207, 763, 315, 308, 70, 810, 253, 150, 285, 312, 105, 128, 199, 596, 
            702, 292, 59, 617, 42, 352, 763, 304, 647, 540, 764, 295, 868, 219, 340, 
            70, 259, 500, 671, 800, 700, 42, 810, 481, 480, 706, 340, 766, 80, 809, 
            425, 621, 608, 206, 682, 247, 36, 533, 522, 808, 203, 346, 493, 229, 389, 
            776, 520, 111, 488, 332, 325, 856, 101, 183, 747, 837, 587, 777, 756, 753, 
            431, 313, 448, 219, 700, 604, 381, 50, 429, 110, 372, 398, 275, 833, 23, 
            200, 57, 693, 87, 727, 618, 480, 135, 634, 722, 867, 706, 625, 366, 497, 
            433, 319, 724, 353, 587, 856, 616, 145, 617, 479, 721, 203, 691, 391, 664, 
            716, 270, 367, 758, 386, 698, 238, 420, 446, 873, 724, 577, 368, 720, 721, 
            76, 734, 78, 43, 286, 348, 295, 443, 357, 99, 764, 585, 79, 624, 484, 825, 
            190, 570, 618, 516, 208, 177, 818, 400, 847, 707, 621, 355, 661, 418, 703, 
            793, 40, 690, 59, 84, 817, 775, 569, 247, 157, 429, 529, 184, 672, 454, 134]
         },
         {
            name: 'total',
            color: 'grey',
            data: [
            342, 837, 100, 738, 493, 529, 527, 349, 459, 34, 50, 447, 30, 430, 496, 
            776, 520, 111, 488, 332, 325, 856, 101, 183, 747, 837, 587, 777, 756, 753, 
            431, 313, 448, 219, 700, 604, 381, 50, 429, 110, 372, 398, 275, 833, 23, 
            200, 57, 693, 87, 727, 618, 480, 135, 634, 722, 867, 706, 625, 366, 497, 
            433, 319, 724, 353, 587, 856, 616, 145, 617, 479, 721, 203, 691, 391, 664, 
            716, 270, 367, 758, 386, 698, 238, 420, 446, 873, 724, 577, 368, 720, 721, 
            76, 734, 78, 43, 286, 348, 295, 443, 357, 99, 764, 585, 79, 624, 484, 825, 
            190, 570, 618, 516, 208, 177, 818, 400, 847, 707, 621, 355, 661, 418, 703, 
            161, 188, 370, 450, 712, 740, 215, 651, 641, 292, 400, 439, 679, 242, 
            785, 695, 809, 121, 687, 252, 316, 412, 359, 161, 541, 237, 375, 442, 
            793, 22, 360, 178, 143, 616, 102, 732, 545, 24, 689, 372, 562, 641, 817, 
            650, 855, 772, 576, 738, 635, 688, 36, 223, 231, 700, 596, 771, 759, 238,
            190, 137, 568, 68, 559, 367, 570, 473, 221, 807, 546, 756, 222, 793, 277, 
            406, 659, 597, 742, 239, 81, 290, 227, 523, 654, 678, 452, 478, 824, 375, 
            529, 210, 82, 104, 226, 353, 714, 391, 669, 361, 76, 236, 78, 599, 772, 
            701, 207, 763, 315, 308, 70, 810, 253, 150, 285, 312, 105, 128, 199, 596, 
            702, 292, 59, 617, 42, 352, 763, 304, 647, 540, 764, 295, 868, 219, 340, 
            70, 259, 500, 671, 800, 700, 42, 810, 481, 480, 706, 340, 766, 80, 809, 
            425, 621, 608, 206, 682, 247, 36, 533, 522, 808, 203, 346, 493, 229, 389, 
            793, 40, 690, 59, 84, 817, 775, 569, 247, 157, 429, 529, 184, 672, 454, 134]
         }]
    });
});


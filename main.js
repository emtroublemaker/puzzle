var loaders = [];
var imgpath = "img/";
var imageloadprogress = 0;
var imageloadtotal = 0;
var randomNum = Math.floor(Math.random()*2);
localStorage.setItem("choice",randomNum);
var allimages =[];
if(randomNum == 0){
    allimages = [
        {
            'name': 'pictures',
            'images':['puzzle.png'],
            'dir': ''
        },
    ];
}else{
    allimages = [
        {
            'name': 'pictures',
            'images': ['puzzle2.png'],
            'dir': ''
        }
    ]
}
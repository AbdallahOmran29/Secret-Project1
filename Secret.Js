function Sentence() {
    var pro = prompt("Write A Sentence"); 
    var Lowercase = pro.toLocaleLowerCase();
    var Newtext = Lowercase.replace(/a/g, "Apple"); // I replaced some of the letters of the alphabet with diffrent fruits
    var Newtext2 = Newtext.replace(/b/g, "b");
    var Newtext3 = Newtext2.replace(/c/g, "c");
    var Newtext4 = Newtext3.replace(/d/g, "d");
    var Newtext5 = Newtext4.replace(/e/g, "e");
    var Newtext6 = Newtext5.replace(/f/g, "f");
    var Newtext7 = Newtext6.replace(/g/g, "g");
    var Newtext8 = Newtext7.replace(/h/g, "h");
    var Newtext9 = Newtext8.replace(/i/g, "Imbe");
    var Newtext10 = Newtext9.replace(/j/g, "j");
    var Newtext11 = Newtext10.replace(/k/g, "k");
    var Newtext12 = Newtext11.replace(/l/g, "l");
    var Newtext13 = Newtext12.replace(/m/g, "m");
    var Newtext14 = Newtext13.replace(/n/g, "n");
    var Newtext15 = Newtext14.replace(/o/g, "Olive");
    var Newtext16 = Newtext15.replace(/p/g, "p");
    var Newtext17 = Newtext16.replace(/q/g, "q");
    var Newtext18 = Newtext17.replace(/r/g, "r");
    var Newtext19 = Newtext18.replace(/s/g, "s");
    var Newtext20 = Newtext19.replace(/t/g, "Tangerine");
    var Newtext21 = Newtext20.replace(/u/g, "Ugni");
    var Newtext22 = Newtext21.replace(/v/g, "v");
    var Newtext23 = Newtext22.replace(/w/g, "w");
    var Newtext24 = Newtext23.replace(/x/g, "x");
    var Newtext25 = Newtext24.replace(/y/g, "y");
    var Newtext26 = Newtext25.replace(/z/g, "z");
    var Newtext27 = Newtext26.split(" ");  // I split the spaces between the words so it would return the encrypted code with commas 
    document.getElementById("ShowSecret").innerHTML = Newtext27;
}

function MessageMeaning() {
    var decoder = prompt("Decode The Message"); 
    var Decode1 = decoder.replace(/Apple/g, "a");
    var Decode2 = Decode1.replace(/e/g, "e");
    var Decode3 = Decode2.replace(/Imbe/g, "i");
    var Decode4 = Decode3.replace(/Olive/g, "o");
    var Decode5 = Decode4.replace(/Ugni/g, "u");
    var Decode6 = Decode5.replace(/Tangerine/g, "t");
    var Decode7 = Decode6.replace(/,/g, " "); // this reverses the split method to decode the
    var Decode8 = Decode7.replace(/b/g, "b");
    document.getElementById("ShowDecode").innerHTML = Decode8;
}  
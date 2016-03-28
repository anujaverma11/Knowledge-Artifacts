/******* still working on the problem ********/

/*Credits: This problem appeared in the Facebook Hacker Cup 2013 Hackathon.

When John was a little kid he didn't have much to do. There was no internet, no Facebook, and no programs to hack on. So he did the only thing he could... he evaluated the beauty of strings in a quest to discover the most beautiful string in the world.

Given a string s, little Johnny defined the beauty of the string as the sum of the beauty of the letters in it. The beauty of each letter is an integer between 1 and 26, inclusive, and no two letters have the same beauty. Johnny doesn't care about whether letters are uppercase or lowercase, so that doesn't affect the beauty of a letter. (Uppercase 'F' is exactly as beautiful as lowercase 'f', for example.)

You're a student writing a report on the youth of this famous hacker. You found the string that Johnny considered most beautiful. What is the maximum possible beauty of this string?

INPUT SAMPLE:

Your program should accept as its first argument a path to a filename. Each line in this file has a sentence. E.g.

ABbCcc
Good luck in the Facebook Hacker Cup this year!
Ignore punctuation, please :)
Sometimes test cases are hard to make up.
So I just go consult Professor Dalves

OUTPUT SAMPLE:

Print out the maximum beauty for the string. E.g.

152
754
491
729
646 */

var Letters = {a:24,b:25,c:26,d:1,e:2,f:3,g:4,h:5,i:6,j:7,k:8,l:9,m:10,n:11,o:12,p:13,q:14,r:15,s:16,t:17,u:18,v:19,w:20,x:21,y:22,z:23}


string = "Ignore punctuation, please :)".toLowerCase();
string = string.split("");
var beauty = 0;

for(var i=0; i<string.length; i++){
  if (Letters[string[i]] !== undefined){
    console.log(Letters[string[i]]);
    beauty += Letters[string[i]];
  }

}
console.log(beauty);
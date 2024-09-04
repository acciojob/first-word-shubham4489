function firstWord(s) :
  // your code here
	if not s:
	return ''
	
	 s=s.strip()
	space_index=s.find(' ')

	if space_index=-1:
	return s;
	  

return s[:space_index]
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));   

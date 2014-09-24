// Inspired by http://is.gd/mwZp7E
// and https://github.com/panicsteve/cloud-to-butt

walk(document.body);

/* Not working yet
document.title = handleText(document.title);
document.body.addEventListener("DOMNodeInserted", function(event) { walk(event.target); }, false);
document.body.addEventListener("DOMCharacterDataModified", function(event) { handleText(event.target); }, false);
*/

function walk(node) 
{
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var str = textNode.nodeValue;

	// Words
	str = str.replace(/wicked/gi, "WICKED PISSAH");
	str = str.replace(/\bare\b/g, "aw");
	str = str.replace(/\bAre\b/g, "Aw");
	str = str.replace(/\bARE\b/g, "AW");
	str = str.replace(/awesome/gi, "WICKED PISSAH");
	str = str.replace(/cool/g, "wicked");
	str = str.replace(/Cool/g, "Wicked");
	str = str.replace(/good/g, "wicked");
	str = str.replace(/Good/g, "Wicked");
	str = str.replace(/there/g, "theya");
	str = str.replace(/There/g, "Theya");
	str = str.replace(/their/g, "theya");
	str = str.replace(/Their/g, "Theya");
	str = str.replace(/theyre/g, "theya");
	str = str.replace(/Theyre/g, "Theya");
	str = str.replace(/they're/g, "theya");
	str = str.replace(/They're/g, "Theya");
	str = str.replace(/where/g, "waya");
	str = str.replace(/Where/g, "Waya");
	str = str.replace(/\byour/g, "yah");
	str = str.replace(/\bYour/g, "Yah");
	str = str.replace(/\bYOUR/g, "YAH");
	str = str.replace(/\byou/g, "yah");
	str = str.replace(/\bYou/g, "Yah");
	str = str.replace(/\bYOU/g, "YAH"); 

	// Vowel Sounds (overlapping cases at the top)
	str = str.replace(/ier\b/g, "eeya");
	str = str.replace(/ear\b/g, "eeya");
	str = str.replace(/ere\b/g, "eeya");

	str = str.replace(/air/g, "aya")
	str = str.replace(/Air/g, "Aya")
	str = str.replace(/are\b/g, "aya");
	str = str.replace(/ara/g, "ahra");
	str = str.replace(/are/g, "ahre");
	str = str.replace(/ari/g, "ahri");
	str = str.replace(/aro/g, "ahro");
	str = str.replace(/ary/g, "ahry");
	str = str.replace(/ar/g, "ah");
	str = str.replace(/Ar/g, "Ah");
	str = str.replace(/alk\b/g, "ack");
	str = str.replace(/ero/g, "ahro");
	str = str.replace(/ers\b/g, "ahs"); 
	str = str.replace(/er/g, "ah");
	str = str.replace(/ire\b/g, "iyah");
	str = str.replace(/ired\b/g, "iyahd");
	str = str.replace(/ir/g, "ih");
	str = str.replace(/ory/g, "ary");
	str = str.replace(/ore\b/g, "oah");
	str = str.replace(/ores\b/g, "oahs");
	str = str.replace(/ori/g, "ahri");
	str = str.replace(/or/g, "ah");
	str = str.replace(/Or/g, "Ah");
	str = str.replace(/ot\b/g, "at");
	str = str.replace(/od/g, "ad");

	textNode.nodeValue = str;
}
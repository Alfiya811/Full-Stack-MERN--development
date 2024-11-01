## LIST ##
In html, LIST is a structured way to create collection of similar or related items
Lists are commanly used to organize and display information in a structured format

There are 3 types of lists in html:-
i)ul
ii)ol
iii)dl

<li></li> Tags used t define list Items
I]ul - unordered list
    Every item have bullet point ,not numbered or sequenced.

attributes/Type of ul
    *disc - Default/solid
    *circle - hollow disc/circle
    *square - square shaped bullet point
    *triangle - Triangle shaped bullet point
    (NOTE: There is also a triangle, but not all the browsers support it.)


II]ol - Ordered list
    every list item will have a number in front of it.

attributes/Type of ul
    *"1" - default=1 2 3 
    *"A" -Capital letter    =A B C
    *"a" -lowercase letter = a, b, c
    *"I" -Capital Romans = I , II, III 
    *"i" -Lowercase letter = i, ii, iii

We can also use the start attribute with any of the type attributes, with attribute start
eg:-
    <ol start="c">
       <li>HTML</li>
       <li>CSS</li>
    </ol>


III]dl - Defination list
    Represent a list of terms and their respective definations

dl consists of 2 tags
   <dt></dt> Defination term
   <dd></dd> Defination description

ex:-
 <dl>
   <dt>Term 1</dt>
    <dd>Defination 1</dd>
   <dt>Term 2</dt>
    <dd>Defination 2</dd>


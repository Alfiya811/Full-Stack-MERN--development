**Introduction to HTML Table**
    o--> table
    o--> td
    o--> tr
    o--> Table attribute :-
            #rowspan
            #colspan
            #cellpadding
            #cellspacin
            #bgcolor
    o--> caption
    o--> thead, tbody,tfoot

1]<table></table>
Used to define a table in HTML, content of every table is encloed in table tag.
2]<td></td>
Table Data-Smallest container in table,By default row 
3]<tr></tr>
Used to define table row
4]<th></th>
Used to define header cell,elements are BOLD and centered by default
5]<caption></caption> 
Tag in HTML is like a title for a table. It goes right after the <table> tag but before the data rows.

---------Attributes------------
1)rowspan- Merge and occupy multiple rows, need to be included in td or th tag
Species how many row cell should span
2)colspan- Merge and occupy multiple column, need to be included in td or th tag
Species how many column cell should span
3)cellpadding
Used to add gap between cells content and cell border
4)cellspacing
Used to add space between cells of table

![alt text](cellp.jpg)

5)bgcolor
HTML tables offer an additional attribute known as "bgcolor." This attribute allows us to apply color to
individual table cells (<td>).

Additional =By using elements, like <thead>, <tbody>, and <tfoot>, we make it easier for tools like screen readers to
understand and show the table information in a better way to people who can't see the screen well.
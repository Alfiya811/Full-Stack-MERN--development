## HTML Forms ##
HTML Forms use the <form> tag to collect user input through various interactive controls.
Syntax:
<form>
      <!--form elements-->
</form>

-------------Tags of forms----------

<label>	It defines labels for <form> elements.

<input>	It is used to get input data from the form in various types such as text, password, email, etc by changing its type.

<button>	It defines a clickable button to control other elements or execute a functionality.

<select>	It is used to create a drop-down list.

<textarea>	It is used to get input long text content.

<fieldset>	It is used to draw a box around other form elements and group the related data.

<legend>	It defines a caption for fieldset elements

<option>	It is used to define options in a drop-down list.

*** Input Types  ***
<input type=”text”>
Defines a one-line text input field

<input type=”password”>
Defines a password field

<input type=”submit”>
Defines a submit button

<input type=”reset”>
Defines a reset button

<input type=”radio”>
Defines a radio button

<input type=”email”>
Validates that the input is a valid email address.

<input type=”number”>
Allows the user to enter a number. You can specify min, max, and step attributes for range.

<input type=”checkbox”>
Used for checkboxes where the user can select multiple options.

<input type=”date”>
Allows the user to select a date from a calendar.

<input type=”time”>
Allows the user to select a time.

<input type=”file”>
Allows the user to select a file to upload.

***Attributes that can be used with the <form>***

 1]action: This attribute specifies where to send the form-data when a form is submitted. The value of this attribute is typically a URL.

 2]method: This attribute defines the HTTP method used to send the form-data. 
he values can be **get** or **post**.

 3]target: This attribute specifies where to display the response received after submitting the form. The values can be “_blank”, “_self”, “_parent”, “_top”, or the name of an iframe.

 4]autocomplete: This attribute specifies whether a form should have autocomplete on or off. When autocomplete is on, the browser automatically completes values based on values that the user has entered before.

 5]novalidate: This Boolean attribute specifies that the form-data should not be validated on submission.
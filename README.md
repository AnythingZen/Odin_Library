# Odin Library
Using javascript for user to interact and store new books


## Problems met : 
1. Button was on type submit, resulting in content unable to be rendered since its submitted to the form only.

2. On hindsight, rather than create so many elements and appending them manually, could have just created a single element and use inner.html and template literate to directly add in the new tags.

3. Remember to use event delegation instead so that whole container is always 'listened' for, rather than just a single item. 

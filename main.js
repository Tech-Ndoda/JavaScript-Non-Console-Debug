/*
   This function is supposed to add two variables: "a" and "b", then return their sum.
   However, the developer makes a mistake and uses variable "d" instead of "b", and
   "d" isn't declared which leads to an error thrown.

   So, this error won't he shown to the developer at run stage if it is not logged, or say,
   the IDE doesn't have a console.
*/

function add(a, b)
{
  return(a + d);
}

add(1, 2); //This code will throw an error.
_debug(add, 1, 2); //This code will still throw an error but will alert the developer.

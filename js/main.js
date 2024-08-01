// To the function _debug any function with an unlimited number of passed arguments can be passed.
function _debug(_function, ...params)
{
     try
     {
          _function(...params);
     }
     catch(err)
     { 
          alert(err);
     }
}

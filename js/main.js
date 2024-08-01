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

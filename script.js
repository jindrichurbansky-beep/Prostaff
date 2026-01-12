
(function(){
  const params = new URLSearchParams(location.search);
  const role = params.get('pozice');
  const roleField = document.getElementById('roleField');
  if (role && roleField) roleField.value = decodeURIComponent(role.replace(/\+/g,' '));

 
  const out = (id, key) => {
    const el = document.getElementById(id);
    if (el) el.textContent = params.get(key) || '';
  };
  out('out-name','name');
  out('out-email','email');
  out('out-role','role');
  out('out-title','title');
  out('out-city','city');
  out('out-type','type');
})();
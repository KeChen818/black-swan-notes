document.addEventListener('DOMContentLoaded', function(){
  const items = Array.from(document.querySelectorAll('.hub-item'))
  const yearSel = document.getElementById('filter-year')
  const kindSel = document.getElementById('filter-kind')
  const years = Array.from(new Set(items.map(i=>i.dataset.year))).sort().reverse()
  years.forEach(y=>{const o=document.createElement('option');o.value=y;o.textContent=y;yearSel.appendChild(o)})
  function apply(){
    const y=yearSel.value; const k=kindSel.value
    items.forEach(it=>{
      const okYear = (y==='all') || (it.dataset.year===y)
      const okKind = (k==='all') || (it.dataset.kind===k)
      it.style.display = (okYear && okKind)?'block':'none'
    })
  }
  yearSel.addEventListener('change',apply)
  kindSel.addEventListener('change',apply)
})

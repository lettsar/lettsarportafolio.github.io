export function barprogress(dato,icono,desc){    
      
    return `
    <div class="progress">
    <i class="${icono}">${desc}</i>
    <div class="progress-bar"></div>
  </div>
    `
    
}
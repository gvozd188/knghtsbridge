import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from '.Main.module.css'


 function Library() {
   return (
   <>
      <ul>
         <li>
         <h2 className='big'>156-63м<sup>2</sup></h2>
         <p className='small'>Площадь квартир</p>
         </li>
         <li>
         <h2 className='big'>475</h2>
         <p className='small'>Парковочных мест</p>
         </li>
         <li>
         <h2 className='big'>10мин</h2>
         <p className='small'>До метро Фрунзенская</p>
         </li>
         <li>
         <h2 className='big'>2<span>га</span></h2>
         <p className='small'>Площадь собственног парка</p>
         </li>

<pre className='description'>Жилой комплекс из четырех клубных домов класса де-люкс в английском стиле, расположенный в собственном парке площадью 3 га в районе Хамовники. Авторы интерьеров жилого копмлекса,и дизайна частного парка – дизайнеры мировой величины. Так, общественные зоны оформляет Дэвид Линли, племянник королевы Великобритании и глава компании LINLEY, а настоящий английский парк для жителей
</pre>
      </ul>
   </>
   )
}
 export default Library
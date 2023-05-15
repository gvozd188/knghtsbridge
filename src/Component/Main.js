import React from 'react';
import ReactDOM from 'react-dom/client';
import MainStyles from './Main.module.css'


 function Library() {
   return (
   <>
      <ul>
         <li>
         <h2 className={MainStyles.big}>156-63м<sup>2</sup></h2>
         <p className={MainStyles.small}>Площадь квартир</p>
         </li>
         <li>
         <h2 className={MainStyles.big}>475</h2>
         <p className={MainStyles.small}>Парковочных мест</p>
         </li>
         <li>
         <h2 className={MainStyles.big}>10мин</h2>
         <p className={MainStyles.small}>До метро Фрунзенская</p>
         </li>
         <li>
         <h2 className={MainStyles.big}>2<span>га</span></h2>
         <p className={MainStyles.small}>Площадь собственног парка</p>
         </li>

<p className={MainStyles.discript}>Жилой комплекс из четырех клубных домов класса де-люкс в английском стиле, расположенный в собственном парке площадью 3 га в районе Хамовники. Авторы интерьеров жилого копмлекса,и дизайна частного парка – дизайнеры мировой величины. Так, общественные зоны оформляет Дэвид Линли, племянник королевы Великобритании и глава компании LINLEY, а настоящий английский парк для жителей
</p>
      </ul>
   </>
   )
}
 export default Library
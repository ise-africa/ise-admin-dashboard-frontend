import classes from './ActionsModal.module.css'

type ActionsModalProps = {
   onClick: () => void
   onClick2: () => void
}

const ActionsModal = ({
   onClick,
   onClick2
}: ActionsModalProps) => {

   const modalOptions = [
      {
         action: onClick,
         title: 'View details',
         svg: <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9998 8C13.9998 9.65685 12.6566 11 10.9998 11C9.3429 11 7.99976 9.65685 7.99976 8C7.99976 6.34315 9.3429 5 10.9998 5C12.6566 5 13.9998 6.34315 13.9998 8Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.45801 7.99997C2.73228 3.94288 6.52257 1 11.0002 1C15.4778 1 19.2681 3.94291 20.5424 8.00004C19.2681 12.0571 15.4778 15 11.0002 15C6.52256 15 2.73226 12.0571 1.45801 7.99997Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
      },
      {
         action: onClick2,
         title: 'Edit cohort',
         svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2677 3.73223L20.9748 3.02513V3.02513L20.2677 3.73223ZM6.5 21.0355V22.0355C6.76522 22.0355 7.01957 21.9301 7.20711 21.7426L6.5 21.0355ZM3 21.0355H2C2 21.5878 2.44772 22.0355 3 22.0355V21.0355ZM3 17.4644L2.29289 16.7573C2.10536 16.9448 2 17.1992 2 17.4644H3ZM17.4393 4.43934C18.0251 3.85355 18.9748 3.85355 19.5606 4.43934L20.9748 3.02513C19.608 1.65829 17.3919 1.65829 16.0251 3.02513L17.4393 4.43934ZM19.5606 4.43934C20.1464 5.02513 20.1464 5.97487 19.5606 6.56066L20.9748 7.97487C22.3417 6.60804 22.3417 4.39196 20.9748 3.02513L19.5606 4.43934ZM19.5606 6.56066L5.79289 20.3284L7.20711 21.7426L20.9748 7.97487L19.5606 6.56066ZM6.5 20.0355H3V22.0355H6.5V20.0355ZM16.0251 3.02513L2.29289 16.7573L3.70711 18.1715L17.4393 4.43934L16.0251 3.02513ZM2 17.4644V21.0355H4V17.4644H2ZM14.5251 5.93934L18.0606 9.47487L19.4748 8.06066L15.9393 4.52513L14.5251 5.93934Z" fill="#2E2E2E" />
         </svg>
      },
   ];

   return (
      <div className={classes.container}>
         {modalOptions.map((data, i) => (
            <>
               <div key={i} onClick={data.action}>
                  {data.svg}
                  <span>{data.title}</span>
               </div>
            </>
         ))}
      </div>
   )
}

export default ActionsModal

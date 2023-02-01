import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilUsdSquare,
  UilMoneyWithdrawal
} from '../node_modules/@iconscout/react-unicons'


export const pcMenu = [
  {
    title: 'داشبورد',
    icon: <UilEstate />,
    link: '/',
  },
  {
    title: 'نمودارها',
    icon: <UilChart />,
    link: '/charts',
  },
  {
    title: 'سفارشات',
    icon: <UilClipboardAlt />,
    link: '/orders',
  },
  {
    title: 'مشتریان',
    icon: <UilUsersAlt />,
    link: '/customers',
  },
  {
    title: 'محصولات',
    icon: <UilPackage />,
    link: '/products',
  },
  {
    title: 'خروج',
    icon: <UilSignOutAlt />,
    link: '',
  },
];



export const statsData = [
  {
    title: 'فروش ها',
    barValue: 70,
    value: '14,200',
    icon: <UilUsdSquare />,
    bg: 'purple-gradient',

    chartData: {
      labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
      datasets: [
        {
          label: 'فروش ماهانه',
          data: [20, 50, 30, 80, 90, 50, 60, 60, 100, 110, 80, 120],
          backgroundColor: '#F87171',
          borderColor: 'black',
          borderWidth: 1.5,
          borderRadius: 10,

        }
      ]
    }
  },
  {
    title: 'موجودی',
    barValue: 64,
    value: '18,650',
    icon: <UilClipboardAlt />,
    bg: 'pink-gradient',

    chartData: {
      labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
      datasets: [
        {
          label: 'موجودی در ماه',
          data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
          backgroundColor: '#3B82F6',
          borderColor: 'black',
          borderWidth: 1.5,
          borderRadius: 10,

        }
      ]
    }

  },
  {
    title: 'هزینه ها',
    barValue: 85,
    value: '650,000',
    icon: <UilMoneyWithdrawal />,
    bg: 'orange-gradient',

    chartData: {
      labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
      datasets: [
        {
          label: 'هزینه های ماهانه',
          data: [10, 40, 30, 70, 50, 60, 120, 80, 30, 70, 110, 20],
          backgroundColor: '#78716C',
          borderColor: 'black',
          borderWidth: 1.5,
          borderRadius: 10,

        }
      ]
    }

  },

];


export const ordersData = [
  {
    product: 'ریش تراش برقی فیلیپس',
    id: '1876005',
    date: '1400/9/6',
    status: 'تایید شده',
    detailLink: '',
    class: 'orders-approved'
  },
  {
    product: 'کرم مرطوب کننده کامان',
    id: '1898001',
    date: '1400/12/12',
    status: 'در حال تکمیل',
    detailLink: '',
    class: 'orders-pending'
  },
  {
    product: 'ضدآفتاب زنانه نیوا',
    id: '1855007',
    date: '1401/1/27',
    status: 'رد شده',
    detailLink: '',
    class: 'orders-rejected'
  },
  {
    product: 'اسپری ضد تعریق ریکسونا',
    id: '1899003',
    date: '1401/2/6',
    status: 'تحویل شده',
    detailLink: '',
    class: 'orders-delivered'
  },
  {
    product: 'عطر مردانه مدل کرید آونتوس',
    id: '1899009',
    date: '1401/2/9',
    status: 'تایید شده',
    detailLink: '',
    class: 'orders-approved'
  },
];
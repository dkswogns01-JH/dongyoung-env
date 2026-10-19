/* 동영종합환경 제품 데이터
 * 규격·단가·식별번호: 나라장터 쇼핑몰 등록 정보 (2026년 10월 확인)
 * 재질·특징: 나라장터 상품속성 + 회사 제품 홍보물
 * img.t: 'cut' = 흰 배경 제품 사진, 'photo' = 현장 사진, 'doc' = 안내물(포스터·도면)
 */
window.DY = {
  CATEGORIES: [
    { id: 'snow', name: '제설함', en: 'Snow Box', desc: '덮개·손잡이가 달린 타원형 제설함. 일반형과 내용물이 보이는 투시창형.', cover: 'dyz-hps-1.webp' },
    { id: 'recycle', name: '재활용 수거함', en: 'Recycling', desc: '폐형광등 수거함 · 폐건전지 수거함', cover: 'dyl-300-1.webp' },
    { id: 'net', name: '분리수거용 그물망', en: 'Net & Tag', desc: '분리수거용 그물망과 그물망 태그', cover: 'dyn-100-1.webp' }
  ],
  PRODUCTS: [
    { id: 'dyz-ps', cat: 'snow', model: 'DYZ-PS', title: '제설함 (소형, 150L)', short: '150L · 790×560×520mm',
      desc: '덮개와 손잡이가 달린 타원형 제설함입니다. 뚜껑은 ABS, 몸체는 HDPE로 만들었습니다.',
      imgs: [{ f: 'dyz-ps-1.webp', t: 'cut' }],
      specs: [['규격', '790 × 560 × 520 mm'], ['용량', '150 L'], ['재질', '뚜껑 ABS / 몸체 HDPE'], ['두께', '2.0 mm'], ['무게', '8.5 kg'], ['구성', '덮개·손잡이 있음, 바퀴 없음']],
      g2b: { name: '분리수거함', no: '23600959', price: 158400 } },
    { id: 'dyz-pl', cat: 'snow', model: 'DYZ-PL', title: '제설함 (대형, 320L)', short: '320L · 1050×720×690mm',
      desc: '덮개와 손잡이가 달린 대형 타원형 제설함입니다. 뚜껑은 ABS, 몸체는 HDPE로 만들었습니다.',
      imgs: [{ f: 'dyz-pl-1.webp', t: 'cut' }],
      specs: [['규격', '1050 × 720 × 690 mm'], ['용량', '320 L'], ['재질', '뚜껑 ABS / 몸체 HDPE'], ['두께', '2.5 mm'], ['무게', '12.5 kg'], ['구성', '덮개·손잡이 있음, 바퀴 없음']],
      g2b: { name: '분리수거함', no: '23600958', price: 174900 } },
    { id: 'dyz-hps', cat: 'snow', model: 'DYZ-HPS', title: '투시창 제설함 (소형)', short: '투시창 · 790×560×520mm',
      desc: '덮개에 투시창이 있어 열지 않고도 안의 내용물을 확인할 수 있는 제설함입니다.',
      imgs: [{ f: 'dyz-hps-1.webp', t: 'cut' }, { f: 'dyz-hps-2.webp', t: 'cut' }, { f: 'dyz-hps-3.webp', t: 'photo' }],
      specs: [['규격', '790 × 560 × 520 mm'], ['특징', '덮개 투시창']],
      g2b: { name: '투시창 분리수거함', no: '25641324', price: 165000 } },
    { id: 'dyz-hpl', cat: 'snow', model: 'DYZ-HPL', title: '투시창 제설함 (대형)', short: '투시창 · 1050×720×690mm',
      desc: '덮개에 투시창이 있어 열지 않고도 안의 내용물을 확인할 수 있는 대형 제설함입니다.',
      imgs: [{ f: 'dyz-hpl-1.webp', t: 'cut' }, { f: 'dyz-hpl-2.webp', t: 'cut' }, { f: 'dyz-hpl-3.webp', t: 'photo' }],
      specs: [['규격', '1050 × 720 × 690 mm'], ['특징', '덮개 투시창']],
      g2b: { name: '투시창 분리수거함', no: '25641323', price: 180000 } },
    { id: 'dyl-300', cat: 'recycle', model: 'DYL-300', title: '폐형광등 수거함', short: 'HDPE · 1330×488×308mm',
      desc: '폐형광등을 수거·적재·운반하는 바구니형 수거함입니다. 쇠고리를 걸면 여러 단으로 쌓을 수 있고, 바닥에 배수홀이 있습니다.',
      imgs: [{ f: 'dyl-300-1.webp', t: 'cut' }, { f: 'dyl-300-2.webp', t: 'cut' }, { f: 'dyl-300-3.webp', t: 'cut' }, { f: 'dyl-300-4.webp', t: 'photo' }, { f: 'dyl-300-5.webp', t: 'photo' }, { f: 'dyl-300-spec.webp', t: 'doc' }],
      specs: [['규격', '1330 × 488 × 308 mm'], ['재질', 'HDPE (재생·재활용 가능)'], ['용도', '폐형광등 수거·적재·운반'], ['원산지', '국내산']],
      g2b: { name: '폐형광등분리수거함', no: '24306062', price: 66000 } },
    { id: 'dyb-30', cat: 'recycle', model: 'DYB-30', title: '폐건전지 수거함 (30L)', short: 'PP · Ø300×680mm',
      desc: '건전지 모양의 폐건전지 수거함입니다. 바닥 스펀지로 투입 소음을 줄였고, 바닥에 배수구멍이 있습니다. 철제 수거함과 달리 정전기가 생기지 않습니다.',
      imgs: [{ f: 'dyb-30-1.webp', t: 'cut' }, { f: 'dyb-30-spec.webp', t: 'doc' }],
      specs: [['규격', '지름 300 × 높이 680 mm'], ['용량', '30 L'], ['재질', 'PP'], ['원산지', '국내생산']],
      g2b: { name: '폐건전지수거함', no: '25641325', price: 66000 } },
    { id: 'dyn-100', cat: 'net', model: 'DYN-100', title: '분리수거용 그물망 100L', short: '100L · 350×350×800mm',
      desc: '분리수거함에 끼워 쓰는 그물망입니다.',
      imgs: [{ f: 'dyn-100-1.webp', t: 'cut' }],
      specs: [['규격', '350 × 350 × 800 mm'], ['용량', '100 L']],
      g2b: { name: '(부품)분리수거용그물망', no: '23600976', price: 3500 } },
    { id: 'dyn-200', cat: 'net', model: 'DYN-200', title: '분리수거용 그물망 200L', short: '200L · 500×500×1050mm',
      desc: '분리수거함에 끼워 쓰는 그물망입니다.',
      imgs: [{ f: 'dyn-200-1.webp', t: 'cut' }],
      specs: [['규격', '500 × 500 × 1050 mm'], ['용량', '200 L']],
      g2b: { name: '(부품)분리수거용그물망', no: '23600975', price: 4290 } },
    { id: 'dyw-100', cat: 'net', model: 'DYW-100', title: '분리수거용 그물망 (사각)', short: '700×700×400mm',
      desc: '분리수거용 그물망입니다.',
      imgs: [{ f: 'dyw-100-1.webp', t: 'cut' }],
      specs: [['규격', '700 × 700 × 400 mm']],
      g2b: { name: '(부품)분리수거용그물망', no: '23680055', price: 3500 } },
    { id: 'dyb-gc', cat: 'net', model: 'DYB-GC', title: '그물망 태그', short: '그물망 표시용',
      desc: '그물망에 기관명·로고 등을 표시하는 태그입니다.',
      imgs: [{ f: 'dyb-gc-1.webp', t: 'cut' }],
      specs: [['용도', '그물망 표시용 태그']],
      g2b: { name: '(부품)그물망태그', no: '23603848', price: 52 } }
  ]
};

import product_01_image_01 from "../images/fanta-ko-nen.png"  
import product_01_image_02 from "../images/fanta.jpg"

import product_02_image_01 from "../images/ga-ran-ko-nen.png"
import product_02_image_02 from "../images/ga-ran.jpg"

import product_03_image_01 from "../images/coca-cola.png"
import product_03_image_02 from "../images/coca-cola.png"

import product_04_image_01 from "../images/pizza-ko-nen.png"
import product_04_image_02 from "../images/pizza-ko-nen.png"

import product_05_image_01 from "../images/hamburger-1.jpg"
import product_05_image_02 from "../images/hamburger-1.jpg"

import product_06_image_01 from "../images/khoai-tay-chien-1.jpg"
import product_06_image_02 from "../images/khoai-tay-chien-1.jpg"

import product_07_image_01 from "../images/trasua-2.jpg"
import product_07_image_02 from "../images/trasua-ko-nen-2.png"

import product_08_image_01 from "../images/trasua-3.jpg"
import product_08_image_02 from "../images/trasua-ko-nen-3.png"

import product_09_image_01 from "../images/trasua-3.jpg"
import product_09_image_02 from "../images/trasua-ko-nen-3.png"

import product_10_image_01 from "../images/trasua-1.jpg"
import product_10_image_02 from "../images/trasua-ko-nen-1.png"

import product_11_image_01 from "../images/trasua-4.jpg"
import product_11_image_02 from "../images/trasua-ko-nen-4.png"

import product_12_image_01 from "../images/trasua-5.jpg"
import product_12_image_02 from "../images/trasua-ko-nen-5.png"



const products = [
    {
        title: "Fanta",
        price: '19000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "nuoc",
        slug: "fanta",
        size: ["s", "m", "l"],
        description: "Hàm lượng vitamin C, alpha - carotene và beta - cryptoxanthin có trong chanh dây chính là những chất chống ô xy hóa, có tác dụng tiêu diệt các gốc tự do, bảo vệ các tế bào của cơ thể, từ đó tăng cường hệ miễn dịch. Quả chanh dây có nhiều phốt pho, ma giê, sắt giúp xương chắc khỏe, cải thiện chứng mỏi lưng hay đau nhức khớp. Chanh dây đặc biệt có lợi cho người bị mất ngủ hoặc bị chứng rối loạn giấc ngủ. Hợp chất alkaloids có trong chanh dây có thể giúp tĩnh tâm, an thần, giảm bớt bồn chồn lo âu và làm cho giấc ngủ sâu hơn."
    },
    {
        title: "Gà rán",
        price: '159000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "do-an",
        slug: "ga-ran",
        size: ["m", "l"],
        description: "Giới thiệu sản phẩm..."
    },
    {
        title: "Coca-Cola",
        price: '19000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "nuoc",
        slug: "coca-cola",
        size: ["m", "l"],
        description: "Hàm lượng vitamin C, alpha - carotene và beta - cryptoxanthin có trong chanh dây chính là những chất chống ô xy hóa, có tác dụng tiêu diệt các gốc tự do, bảo vệ các tế bào của cơ thể, từ đó tăng cường hệ miễn dịch. Quả chanh dây có nhiều phốt pho, ma giê, sắt giúp xương chắc khỏe, cải thiện chứng mỏi lưng hay đau nhức khớp. Chanh dây đặc biệt có lợi cho người bị mất ngủ hoặc bị chứng rối loạn giấc ngủ. Hợp chất alkaloids có trong chanh dây có thể giúp tĩnh tâm, an thần, giảm bớt bồn chồn lo âu và làm cho giấc ngủ sâu hơn."
    },
    {
        title: "Pizza",
        price: '99000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "do-an",
        slug: "pizza",
        size: ["l","xl"],
        description: "Giới thiệu sản phẩm..."
    },
    {
        title: "Hamburger",
        price: '50000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "do-an",
        slug: "hamburger",
        size: ["m", "l"],
        description: "Giới thiệu sản phẩm..."
    },
    {
        title: "Khoai tây chiên",
        price: '30000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "do-an",
        slug: "khoai-tay-chien",
        size: ["s", "m", "l"],
        description: "Giới thiệu sản phẩm..."
    },
    {
        title: "Trà xanh bưởi",
        price: '29000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "nuoc",
        slug: "tra-xanh-buoi",
        size: ["m", "l", "xl"],
        description: "Trong bưởi có rất nhiều vitamin C, chất xơ và nước, bưởi rất tốt cho những người đang cố gắng giảm cân. Các chất xơ và nước trong bưởi thậm chí cò... Trong bưởi có rất nhiều vitamin C, chất xơ và nước, bưởi rất tốt cho những người đang cố gắng giảm cân. Các chất xơ và nước trong bưởi thậm chí cò... Trong bưởi có rất nhiều vitamin C, chất xơ và nước, bưởi rất tốt cho những người đang cố gắng giảm cân. Các chất xơ và nước trong bưởi thậm chí cò... Trong bưởi có rất nhiều vitamin C, chất xơ và nước, bưởi rất tốt cho những người đang cố gắng giảm cân. Các chất xơ và nước trong bưởi thậm chí cò... Trong bưởi có rất nhiều vitamin C, chất xơ và nước, bưởi rất tốt cho những người đang cố gắng giảm cân. Các chất xơ và nước trong bưởi thậm chí cò... Trong bưởi có rất nhiều vitamin C, chất xơ và nước, bưởi rất tốt cho những người đang cố gắng giảm cân. Các chất xơ và nước trong bưởi thậm chí cò..."
    },
    {
        title: "Trà chanh",
        price: '19000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "nuoc",
        slug: "tra-chanh",
        size: ["s", "m", "l"],
        description: "Hàm lượng vitamin C, alpha - carotene và beta - cryptoxanthin có trong chanh dây chính là những chất chống ô xy hóa, có tác dụng tiêu diệt các gốc tự do, bảo vệ các tế bào của cơ thể, từ đó tăng cường hệ miễn dịch. Quả chanh dây có nhiều phốt pho, ma giê, sắt giúp xương chắc khỏe, cải thiện chứng mỏi lưng hay đau nhức khớp. Chanh dây đặc biệt có lợi cho người bị mất ngủ hoặc bị chứng rối loạn giấc ngủ. Hợp chất alkaloids có trong chanh dây có thể giúp tĩnh tâm, an thần, giảm bớt bồn chồn lo âu và làm cho giấc ngủ sâu hơn."
    },
    {
        title: "Trà sữa mật ong",
        price: '34000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "nuoc",
        slug: "tra-sua-mat-ong",
        size: ["m", "l"],
        description: "Hàm lượng vitamin C, alpha - carotene và beta - cryptoxanthin có trong chanh dây chính là những chất chống ô xy hóa, có tác dụng tiêu diệt các gốc tự do, bảo vệ các tế bào của cơ thể, từ đó tăng cường hệ miễn dịch. Quả chanh dây có nhiều phốt pho, ma giê, sắt giúp xương chắc khỏe, cải thiện chứng mỏi lưng hay đau nhức khớp. Chanh dây đặc biệt có lợi cho người bị mất ngủ hoặc bị chứng rối loạn giấc ngủ. Hợp chất alkaloids có trong chanh dây có thể giúp tĩnh tâm, an thần, giảm bớt bồn chồn lo âu và làm cho giấc ngủ sâu hơn."
    },
    {
        title: "Trà sữa dâu",
        price: '29000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "nuoc",
        slug: "tra-sua-dau",
        size: ["m", "l"],
        description: "Nếu như bạn đang khổ tâm vì quầng thâm, dâu tây sẽ rất có ích bởi chúng có khả năng chống viêm và làm sáng da. Thêm vào đó, vitamin C trong dâu tây hạn chế các bệnh về mắt như đục thủy tinh thể. Chất chống oxy hóa và kháng viêm trong dâu tây chống lại sự tăng sinh các khối u và ngăn khối u không lan rộng. Trầm cảm hình thành từ những cảm xúc tiêu cực. Và bạn có thể chống lại chứng bệnh này bằng các nguyên liệu tự nhiên. Khi cảm thấy buồn rầu, hãy ăn dâu tây. Thành phần trong dâu tây hỗ trợ máu mang dưỡng chất đến não, chống lại sự hình thành homocysteine và làm tăng các hormone hạnh phúc như dopamine và serotonin; giúp bạn tươi tỉnh trở lại."
    },
    {
        title: "Trà sữa socola",
        price: '24000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "nuoc",
        slug: "tra-sua-socola",
        size: ["s", "m", "l"],
        description: "Nhiều nghiên cứu đã chứng minh tiêu thụ chocolate giúp làm giảm hàm lượng cholesterol xấu (LDL) và tăng nồng độ cholesterol tốt (HDL), ngăn ngừa nguy cơ mắc các bệnh tim mạch. Nghiên cứu trên tạp chí BMJ (British Medical Journal) kết luận tiêu thụ chocolate có thể giúp giảm nguy cơ phát triển bệnh tim tới 35%. Chocolate có chứa phenylethylamine (PEA), đây là hóa chất mà não bộ tạo ra khi bạn vui, hạnh phúc, chẳng hạn như lúc đang yêu. PEA khuyến khích não bộ giải phóng endorphin mang lại cảm giác vui vẻ, yêu đời"
    },
    {
        title: "Trà sữa kem ",
        price: '194000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "nuoc",
        slug: "tra-sua-kem",
        size: ["s", "m", "l"],
        description: "Hàm lượng vitamin C, alpha - carotene và beta - cryptoxanthin có trong chanh dây chính là những chất chống ô xy hóa, có tác dụng tiêu diệt các gốc tự do, bảo vệ các tế bào của cơ thể, từ đó tăng cường hệ miễn dịch. Quả chanh dây có nhiều phốt pho, ma giê, sắt giúp xương chắc khỏe, cải thiện chứng mỏi lưng hay đau nhức khớp. Chanh dây đặc biệt có lợi cho người bị mất ngủ hoặc bị chứng rối loạn giấc ngủ. Hợp chất alkaloids có trong chanh dây có thể giúp tĩnh tâm, an thần, giảm bớt bồn chồn lo âu và làm cho giấc ngủ sâu hơn."
    },
    {
        title: "Pizza chay",
        price: '99000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "do-an",
        slug: "pizza-chay",
        size: ["s", "m", "l"],
        description: "Giới thiệu sản phẩm..."
    },
    {
        title: "Pizza phomai",
        price: '139000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "do-an",
        slug: "pizza-phomai",
        size: ["s", "m"],
        description: "Giới thiệu sản phẩm..."
    },
    {
        title: "Humburger chay",
        price: '40000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "do-an",
        slug: "humburger-chay",
        size: ["l"],
        description: "Giới thiệu sản phẩm..."
    },
    {
        title: "Hamburger phomai",
        price: '69000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "do-an",
        slug: "humburger-phomai",
        size: ["m", "xl"],
        description: "Giới thiệu sản phẩm..."
    },
    {
        title: "Khoai lắc phomai",
        price: '50000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "do-an",
        slug: "khoai-lac-phomai",
        size: ["s", "m", "l"],
        description: "Giới thiệu sản phẩm..."
    },
    {
        title: "Pizza bò",
        price: '124000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "do-an",
        slug: "pizza-bo",
        size: ["s", "m", "l", "xl"],
        description: "Giới thiệu sản phẩm..."
    },
    // 18 products
];

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}
const getProductBySlug = (slug) => products.find(e => e.slug === slug)
const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}
export default productData
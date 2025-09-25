import './App.css'
import React, { Component } from 'react'

import Card from './components/Card'
import Header from './components/Header'
import BookInCart from './components/BookInCart'
import Footer from './components/Footer'
import BookModal from './components/BookModal'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.CardsRender = this.CardsRender.bind(this)
    this.SelectGenreBooks = this.SelectGenreBooks.bind(this)
    this.SearchBook = this.SearchBook.bind(this)
    this.AddBookInCart = this.AddBookInCart.bind(this)
    this.DeleteBookInCart = this.DeleteBookInCart.bind(this)
    this.AddBookInCardOfBook = this.AddBookInCardOfBook.bind(this)
    this.SumPriceBooksInCart = this.SumPriceBooksInCart.bind(this)

    this.openBookModal = this.openBookModal.bind(this)
    this.closeBookModal = this.closeBookModal.bind(this)

    this.state = {
      books: [
        {
          type: "антиутопия",
          name: "451' по Фаренгейту",
          author: "Рэй Брэдбери",
          annotation: "В романе описывается общество, которое опирается на массовую культуру и потребительское мышление, в котором все книги, заставляющие задумываться о жизни, подлежат сожжению; хранение книг является преступлением; а люди, способные критически мыслить, оказываются вне закона. ",
          price: 472,
          image: "https://listread.com/photo/books/10545-451_gradus_po_farengeytu__fahrenheit_451.jpg",

        },
        {
          type: "антиутопия",
          name: "о дивный новый мир",
          author: "Олдос Леонард Хаксли",
          annotation: "Книга рассказывает о далёком будущем, где детей выращивают в пробирках, практически всю работу выполняют машины, а люди тратят время только на развлечения. Особенно сложно приходится тем, кто ещё не потерял индивидуальность в безумном мире всеобщего веселья. Но как долго они способны противостоять системе",
          price: 360,
          image: "https://content.img-gorod.ru/pim/products/images/fc/7e/018fa2c5-b1e5-71f9-9175-f587a53afc7e.jpg?width=480&height=692&fit=bounds"
        },
        {
          type: "антиутопия",
          name: "1984",
          author: "Джордж Оруэлл",
          annotation: "Культовый антиутопический роман рассказывает о тоталитарном государстве Океания, в котором люди полностью подчинены лидеру – Большому брату. Все их действия и даже размышления строго контролируются – за этим следят Министерство правды и Полиция мыслей. Чувства тоже под запретом, кроме ненависти к врагам и любви к Большому брату. Но есть в Океании и те, кто не согласен с линией партии, а значит, подвергает себя чудовищной опасности. Ведь любое сомнение – это преступление.",
          price: 512,
          image: "https://content.img-gorod.ru/pim/products/images/02/35/018f5ca2-2238-76cc-a98e-fd7150500235.jpg?width=480&height=692&fit=bounds"
        },
        {
          type: "антиутопия",
          name: "рассказ Служанки",
          author: "Маргарет Этвуд",
          annotation: "В недалеком будущем из-за экологической катастрофы большинство женщин становятся бесплодными. Вскоре после этого в Америке к власти приходят религиозные фанатики, создающие на месте Штатов тоталитарное теократическое государство Галаад. В нём женщин лишают всех прав, а тех, кто ещё имеет способность вынашивать детей, превращают в рабынь-служанок. Фредова, то есть принадлежащая человеку по имени Фред, – одна из таких служанок. Когда-то у девушки было имя и счастливое прошлое – и она верит, что сможет их вернуть.",
          price: 450,
          image: "https://content.img-gorod.ru/pim/products/images/a1/a1/018f608e-2f13-79bc-885a-cc14918da1a1.jpg?width=480&height=692&fit=bounds"
        },
        {
          type: "фантастика",
          name: "вокруг света за 80 дней",
          author: "Жюль Верн",
          annotation: "Можно ли обогнуть Землю за 80 дней? Чтобы это проверить, английский джентльмен Филеас Фогг заключает пари и в тот же день со своим слугой Жаном Паспарту отправляется в путешествие. Но кроме сложностей, которые подстерегают героев в каждой стране, появляется ещё одна проблема: Фогга разыскивает сыщик, чтобы обвинить его в крупной краже.",
          price: 290,
          image: "https://content.img-gorod.ru/pim/products/images/32/15/018f600c-64da-72df-ad95-e02590d63215.jpg?width=480&height=692&fit=bounds"
        },
        {
          type: "фантастика",
          name: "человек-амфибия",
          author: "Александр Беляев",
          annotation: "Хирург Сальватор спасает ребёнка, умирающего из-за слабых лёгких, и пересаживает ему жабры акулы. Так мальчик Ихтиандр становится человеком-амфибией. Оказывается, теперь герою нужно соблюдать строгий режим: часть дня проводить на суше, другую – под водой. Что же сделал Сальватор – подарил шанс на новую жизнь или обрёк мальчика на вечные страдания?",
          price: 319,
          image: "https://content.img-gorod.ru/pim/products/images/b2/32/018fa170-0f21-730c-92ce-f34703d6b232.jpg?width=480&height=692&fit=bounds"
        },
        {
          type: "фантастика",
          name: "марсианские хроники",
          author: "Рэй Брэдбери",
          annotation: "Сборник рассказов посвящён путешествию землян на Марс – от первой экспедиции до массовой эмиграции. Оказывается, на таинственной планете живут не чудовища, а существа, похожие на людей. Но не все инопланетяне рады гостям с Земли: они не хотят менять свои устои и соглашаться на порядки",
          price: 463,
          image: "https://content.img-gorod.ru/pim/products/images/63/e0/018f5f95-c78a-72f1-870b-0f48f42163e0.jpg?width=480&height=692&fit=bounds"
        },
        {
          type: "фантастика",
          name: "академия",
          author: "Айзек Азимов",
          annotation: "В мире будущего Млечный Путь превращается в огромную и развитую Галактическую Империю. Однажды учёный Гэри Сэлдон с помощью науки «психоистории» предсказывает, что цивилизация погибнет через несколько веков. Тогда герой решает создать организацию «Академия» – согласно плану, она должна за тысячу лет помочь Галактике избежать гибели и сохранить свою мощь.",
          price: 723,
          image: "https://content.img-gorod.ru/pim/products/images/37/7b/018f5dc1-b480-751f-b72f-229ae731377b.jpg?width=480&height=692&fit=bounds"
        },
        {
          type: "ужасы",
          name: "клатбище домашних жывотных",
          author: "Стивен Кинг",
          annotation: "Роман, который сам Кинг, считая «слишком страшным», долго не хотел отдавать в печать, но только за первый год было продано 657 000 экземпляров! Также роман лег в основу одноименного фильма Мэри Ламберт (где Кинг, кстати, сыграл небольшую роль).",
          price: 561,
          image: "https://content.img-gorod.ru/pim/products/images/26/0a/0192b780-5d00-71d5-b42b-9482f502260a.jpg?width=480&height=692&fit=bounds"
        },
        {
          type: "ужасы",
          name: "лес",
          author: "Светлана Тюльбашева",
          annotation: "Две москвички заблудились в карельском лесу. В заброшенный деревенский дом заселилась одна дружная, но очень странная семья. Лес - это идеально сконструированный хоррор про ужасы, которые таятся и в дикой глуши, и в самых обычных людях - и неизвестно ещё, какие из них страшнее.",
          price: 951,
          image: "https://content.img-gorod.ru/pim/products/images/bb/9b/0196f45c-c45c-702f-acb5-a1f1a217bb9b.jpg?width=480&height=692&fit=bounds"
        },
        {
          type: "ужасы",
          name: "король в желтом",
          author: "Роберт Чамберс",
          annotation: "Десять поэтичных и откровенно пугающих историй, нанизанных на тему таинственной пьесы «Король в желтом», неотвратимо меняющей судьбы всех, кто ее читает, и не менее загадочного, рокового «Желтого знака». Книга, которой восхищался Лавкрафт, считавший ее одним из самых ярких образцов «ужаса и сверхъестественного» американской прозы.",
          price: 612,
          image: "https://content.img-gorod.ru/pim/products/images/63/57/0192466a-6eab-7ebe-913a-ce577bc86357.jpg?width=480&height=692&fit=bounds"
        },
        {
          type: "ужасы",
          name: "сияние",
          author: "Стивен Кинг",
          annotation: "Проходят годы, десятилетия, но потрясающая история писателя Джека Торранса, его сынишки Дэнни, наделенного необычным даром, и поединка с темными силами, обитающими в роскошном отеле «Оверлук», по-прежнему завораживает и держит в неослабевающем напряжении читателей самого разного возраста…",
          price: 743,
          image: "https://content.img-gorod.ru/pim/products/images/fb/b9/018fa1bb-fe1c-70c1-871f-4cb00cfdfbb9.jpg?width=480&height=692&fit=bounds"
        },
        {
          type: "детективы",
          name: "агент на мягких лапах",
          author: "Фрауке Шойнеманн",
          annotation: "Уинстон Черчилль — истинный аристократ, короткошёрстный британец, грациозный, умный и самую малость ленивый кот, который живёт в доме профессора физики в Гамбурге. Его жизнь была спокойной и размеренной, пока он не познакомился с двенадцатилетней Кирой. Обычная прогулка обернулась для новых друзей неожиданным приключением — во время грозы они поменялись телами! ",
          price: 675,
          image: "https://content.img-gorod.ru/pim/products/images/d2/54/018f5da4-b1dd-778a-972d-73c3debbd254.jpg?width=480&height=692&fit=bounds"
        },
        {
          type: "детективы",
          name: "призрак кошки",
          author: "Холли Вебб",
          annotation: "Мейзи Хитчинс мечтает стать детективом, а пока расследует загадки, которые попадаются на пути. В этой книге она ловит… призрака! Только вот щенок Эдди тоже охотится на него, а считается, что животные призраков не видят",
          price: 263,
          image: "https://content.img-gorod.ru/pim/products/images/da/cb/018f5d68-8a4e-7e98-97e6-8478b3f2dacb.jpg?width=480&height=692&fit=bounds"
        },
        {
          type: "детективы",
          name: "секретный ключ",
          author: "Лина Джонс",
          annotation: "Агата всю свою жизнь знала: она прирождённый детектив. Вот только почему-то окружающие не спешили ей верить, да и подходящего дела пока не попадалось. Но однажды всё изменилось. Это произошло в тот день, когда Агата стала случайным свидетелем настоящего преступления.",
          price: 572,
          image: "https://content.img-gorod.ru/pim/products/images/48/80/018f5dee-4d82-7c43-bb64-116eebe04880.jpg?width=480&height=692&fit=bounds"
        },
        {
          type: "детективы",
          name: "полночь в отеле «Баркли»",
          author: "Флёр Брэдли",
          annotation: "Джей-Джей ужасно рад: он едет на выходные в отель «Баркли»! Это самое знаменитое и таинственное место в округе. Вот только мальчик не мог и представить, что на самом деле попадёт в ловушку… Хозяина отеля, мистера Баркли, отравили! И выбраться из отеля можно лишь раскрыв преступление. Получится ли у Джей-Джея найти злодея?",
          price: 820,
          image: "https://content.img-gorod.ru/pim/products/images/14/e8/018f5ecf-a06a-7790-bc18-bfb998dd14e8.jpg?width=480&height=692&fit=bounds"
        },
        {
          type: "романы",
          name: "убийство в 'Восточном экспрессе'",
          author: "Агата Кристи",
          annotation: "Находившийся в Стамбуле великий сыщик Эркюль Пуаро возвращается в Англию на знаменитом «Восточном экспрессе», в котором вместе с ним едут, кажется, представители всех возможных национальностей. Один из пассажиров, неприятный американец по фамилии Рэтчетт, предлагает Пуаро стать своим телохранителем, поскольку считает, что его должны убить.",
          price: 384,
          image: "https://content.img-gorod.ru/pim/products/images/f6/5a/018f5df6-a66e-7012-ac05-dba6a39af65a.jpg?width=480&height=692&fit=bounds"
        },
        {
          type: "романы",
          name: "молчание ягнят",
          author: "Томас Харрис",
          annotation: "Один из самых культовых триллеров ХХ века. Его сенсационная экранизация с Энтони Хопкинсом и Джоди Фостер получила пять премий «Оскар». Молодой курсантке ФБР придется столкнуться со злом во плоти — доктором Ганнибалом Лектером. Каждый из них ведет собственную игру для достижения своих целей. Кто перехитрит другого в этой схватке?",
          price: 867,
          image: "https://content.img-gorod.ru/pim/products/images/43/34/018f5fa3-fb5e-7c01-93ad-7f103ff64334.jpg?width=480&height=692&fit=bounds"
        },
        {
          type: "романы",
          name: "каштановый человечек",
          author: "Сорен Свейструп",
          annotation: "Копенгаген. Найдено тело жестоко убитой девушки. Над ним висит каштановый человечек — куколка, сделанная из каштанов и спичек, с прорезанными глазками и улыбающимся ротиком. На фигурке обнаружены отпечатки пальцев пропавшей год назад и числящейся мертвой девочки. Но человек, признавшийся в ее убийстве, уже сидит в тюрьме. А вскоре находят еще один труп — и снова следователям улыбается каштановый человечек с отпечатками пальцев той же мертвой девочки…",
          price: 497,
          image: "https://content.img-gorod.ru/pim/products/images/b5/1c/018f5fa9-dffa-73eb-aa6f-d81dc229b51c.jpg?width=480&height=692&fit=bounds"
        },
        {
          type: "романы",
          name: "дочь священника",
          author: "Джордж Оруэлл",
          annotation: "Героиня романа — дочь священника Дороти, глубоко верующая и ведущая праведный образ жизни, — в результате несчастного случая теряет память и напрочь забывает о своей вере в Бога. Дороти становится мелкой мошенницей и прибивается к банде бродяг. Через какое-то время память возвращается к ней, но не вера...",
          price: 658,
          image: "https://content.img-gorod.ru/pim/products/images/af/a8/018fa151-3305-7e78-aafb-04d63d25afa8.jpg?width=480&height=692&fit=bounds"
        },
      ],
      allBookCards: [],
      bookCardsRender: [],
      booksInCart: [],
      selectedBook: null,
      isModalOpen: false
    }
  }

  componentDidMount() {
    this.CardsRender()
  }

  CardsRender() {
    const allBooksCards = this.state.books.map((item, id) => (
      <Card
        key={id}
        book={item}
        AddBookInCardOfBook={this.AddBookInCardOfBook}
        onOpenDetails={this.openBookModal} /* клик по карточке откроет модалку */
      />
    ))
    this.setState({ allBookCards: allBooksCards, bookCardsRender: allBooksCards })
  }

  openBookModal(book) {
    this.setState({ selectedBook: book, isModalOpen: true })
  }

  closeBookModal() {
    this.setState({ isModalOpen: false, selectedBook: null })
  }

  SelectGenreBooks(genre) {
    if (genre == 'все') {
      this.setState({ bookCardsRender: this.state.allBookCards })
    } else {
      const allBooksOfGenre = this.state.allBookCards.filter(item => item.props.book.type == genre)
      this.setState({ bookCardsRender: allBooksOfGenre })
    }
  }

  SearchBook(even) {
    const searchName = even.target.value.toLowerCase().trim()
    if (searchName != '') {
      const books = this.state.allBookCards.filter((elem) => elem.props.book.name.toLowerCase().search(searchName) != -1)
      this.setState({ bookCardsRender: books })
    } else {
      this.setState({ bookCardsRender: this.state.allBookCards })
    }
  }

  AddBookInCardOfBook(book) {
    let allBooksInCart = [...this.state.booksInCart]
    let indicator = 0

    if (allBooksInCart.length == 0) {
      this.setState({
        booksInCart: [
          ...this.state.booksInCart,
          <BookInCart
            key={0}
            book={book}
            count={1}
            AddBookInCart={this.AddBookInCart}
            DeleteBookInCart={this.DeleteBookInCart}
          />
        ]
      })
    } else {
      allBooksInCart.map((item, index) => {
        if (item.props.book.name == book.name) {
          const countBook = item.props.count + 1
          allBooksInCart[index] =
            <BookInCart
              key={index}
              book={book}
              count={countBook}
              AddBookInCart={this.AddBookInCart}
              DeleteBookInCart={this.DeleteBookInCart}
            />
          indicator = 1
        }
      })

      if (indicator == 0) {
        allBooksInCart.push(
          <BookInCart
            key={allBooksInCart.length}
            book={book}
            count={1}
            AddBookInCart={this.AddBookInCart}
            DeleteBookInCart={this.DeleteBookInCart}
          />
        )
      }
      this.setState({ booksInCart: allBooksInCart })
    }
  }

  AddBookInCart(book) {
    let allBooksInCart = [...this.state.booksInCart]

    allBooksInCart.map((item, index) => {
      if (item.props.book == book) {
        const countBook = item.props.count + 1
        allBooksInCart[index] =
          <BookInCart
            key={index}
            book={book}
            count={countBook}
            AddBookInCart={this.AddBookInCart}
            DeleteBookInCart={this.DeleteBookInCart}
          />
      }
    })
    this.setState({ booksInCart: allBooksInCart })
  }

  DeleteBookInCart(book) {
    let allBooksInCart = [...this.state.booksInCart]

    allBooksInCart.map((item, index) => {
      if (item.props.book == book) {
        const countBook = item.props.count - 1
        if (countBook > 0) {
          allBooksInCart[index] =
            <BookInCart
              key={index}
              book={book}
              count={countBook}
              AddBookInCart={this.AddBookInCart}
              DeleteBookInCart={this.DeleteBookInCart}
            />
        } else {
          allBooksInCart.splice(index, 1)
        }
      }
    })
    this.setState({ booksInCart: allBooksInCart })
  }

  SumPriceBooksInCart() {
    let sum = 0
    if (this.state.booksInCart.length != 0) {
      this.state.booksInCart.map(item => {
        sum = sum + (item.props.book.price * item.props.count)
      })
    }
    return sum
  }

  render() {
    return (
      <div className='container'>
        <Header
          books={this.state.books}
          booksInCart={this.state.booksInCart}
          SelectGenreBooks={this.SelectGenreBooks}
          SearchBook={this.SearchBook}
          SumPriceBooksInCart={this.SumPriceBooksInCart()}
        />

        <div className='renderBooks'>
          {this.state.bookCardsRender}
        </div>

        <Footer />

        <BookModal
          open={this.state.isModalOpen}
          book={this.state.selectedBook}
          onClose={this.closeBookModal}
          onAddToCart={this.AddBookInCardOfBook}
        />
      </div>
    )
  }
}

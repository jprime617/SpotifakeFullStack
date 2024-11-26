INSERT INTO artists (nome, bio, "imageUrl", "createdAt", "updatedAt") VALUES
('Yung Lixo', 'Rapper brasileiro conhecido por suas letras irônicas e criativas.', 'https://yt3.googleusercontent.com/ytc/AIdro_lVOrsAQ5Qxzi3Kv0ugiVEzi27Zew2jjd20_VXq3KPR1tA=s900-c-k-c0x00ffffff-no-rj', NOW(), NOW()),
('Michael Jackson', 'Conhecido como o Rei do Pop, Michael Jackson é um dos artistas mais influentes da música mundial.', 'https://mjbeats.com.br/wp-content/uploads/2024/06/Michael-Jackson-o-Rei-do-Pop-MJ-Beats.jpeg.webp', NOW(), NOW()),
('Queen', 'Banda britânica de rock formada em 1970, famosa por sucessos como "Bohemian Rhapsody" e "We Will Rock You".', 'https://imusic.b-cdn.net/images/item/original/531/5050293858531.jpg?queen-queen-logo-slipmat-vinyl-accessory&class=scaled&v=1638973630', NOW(), NOW()),
('Roberto Carlos', 'Cantor e compositor brasileiro, conhecido como o Rei da Música Romântica no Brasil.', 'https://yt3.googleusercontent.com/ZImswuUeY9NmW7zmgBwW7j4IUVjJOlWSlHxG-1DyYv9-VkFFkMbamCf9LgrtF4VwIn6WCWY-KA=s900-c-k-c0x00ffffff-no-rj', NOW(), NOW());

INSERT INTO albums (title, "releaseYear", "coverImageUrl", "createdAt", "updatedAt", "artista_id") VALUES
-- Yung Lixo
('Validation Deluxe', 2023, 'https://i.scdn.co/image/ab67616d0000b27339021beae61ff9bfc5135b4b', NOW(), NOW(), 1),
('Bittersweet Memories', 2023, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWMAUe8iiWPoQQUbrSnM7_8WLs_ulzRWYPg&s', NOW(), NOW(), 1),

-- Michael Jackson
('Thriller', 1982, 'https://i.scdn.co/image/ab67616d0000b273de437d960dda1ac0a3586d97', NOW(), NOW(), 2),
('Bad', 1987, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStep0q8UYqVHVo4DfoNdFHSKDjWQInSrRSjw&s', NOW(), NOW(), 2),

-- Queen
('A Night at the Opera', 1975, 'https://upload.wikimedia.org/wikipedia/pt/b/bf/A_Night_at_the_Opera_Queen.jpg', NOW(), NOW(), 3),
('News of the World', 1977, 'https://upload.wikimedia.org/wikipedia/pt/7/7d/Queen-News_of_the_World.jpg', NOW(), NOW(), 3),

-- Roberto Carlos
('Roberto Carlos em Ritmo de Aventura', 1967, 'https://upload.wikimedia.org/wikipedia/pt/a/ad/Roberto_Carlos_em_ritmo_de_aventura.jpg', NOW(), NOW(), 4),
('Detalhes', 1971, 'https://i.scdn.co/image/ab67616d0000b273493c3f41931ffbe4994f390a', NOW(), NOW(), 4);




INSERT INTO musicas (titulo, duracao, "fileUrl", "createdAt", "updatedAt", artista_id, album_id) VALUES
-- Músicas de "Validation Deluxe" (Yung Lixo, album_id: 1, artista_id: 1)
('Sucesso FM', 79.2, 'https://example.com/cidadaodebem.mp3', NOW(), NOW(), 1, 1),
('Rumo Á Vitoria', 196.2, 'https://example.com/realtrap.mp3', NOW(), NOW(), 1, 1),
('Goddamn', 150, 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),
('I Walk', 182.4, 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),
('Waiting to Fly', 184.2, 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),
('Sonhar', 204.6, 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),
('Im in Love', 214.8, 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),
('For My Family', 212.4, 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),
('Going Home', 195, 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),
('The Lord and Me', 248.4, 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),
('Anjos da Guarda', 190.8, 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),
('We Gold', 214.2, 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),


-- Músicas de "Bittersweat Memories" (Yung Lixo, album_id: 2, artista_id: 1)
('Saúde', 61.8, 'https://example.com/manualdogado.mp3', NOW(), NOW(), 1, 2),
('O filho Pródigo', 150.6, 'https://example.com/cringe.mp3', NOW(), NOW(), 1, 2),
('Let it Pour', 144.6, 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),
('The Story', 244.2, 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),
('Back Home', 199.8, 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),
('Melhor Não', 189.6, 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),
('Oldschool', 181.8, 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),
('Dirty Dancing', 195, 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),
('Prefiro Morrer', 150, 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),
('Quase Perfeito', 189.6, 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),
('Máquina do Tempo', 190.2, 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),
('Flores de Outro Canaval', 256.2, 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),

-- Músicas de "Thriller" (Michael Jackson, album_id: 3, artista_id: 2)
('Thriller', 334.8, 'https://example.com/thriller.mp3', NOW(), NOW(), 2, 3),
('Beat It', 250.8, 'https://example.com/beatit.mp3', NOW(), NOW(), 2, 3),
('Billie Jean', 272.4, 'https://example.com/billiejean.mp3', NOW(), NOW(), 2, 3),
('Wanna be Startin’ Somethin’', 361.8, 'https://example.com/billiejean.mp3', NOW(), NOW(), 2, 3),
('Baby Be Mine', 252, 'https://example.com/billiejean.mp3', NOW(), NOW(), 2, 3),
('The Girl is Mine', 205.2, 'https://example.com/billiejean.mp3', NOW(), NOW(), 2, 3),
('Human Nature', 243.6, 'https://example.com/billiejean.mp3', NOW(), NOW(), 2, 3),
('P.Y.T', 215.4, 'https://example.com/billiejean.mp3', NOW(), NOW(), 2, 3),
('The Lady in My Life', 275.4, 'https://example.com/billiejean.mp3', NOW(), NOW(), 2, 3),

-- Músicas de "Bad" (Michael Jackson, album_id: 4, artista_id: 2)
('Smooth Criminal', 250.8, 'https://example.com/smoothcriminal.mp3', NOW(), NOW(), 2, 4),
('Bad', 244.8, 'https://example.com/bad.mp3', NOW(), NOW(), 2, 4),
('The Way You Make Me Feel', 275.4, 'https://example.com/thewayyoumakemefeel.mp3', NOW(), NOW(), 2, 4),
('Speed Demon', 241.8, 'https://example.com/bad.mp3', NOW(), NOW(), 2, 4),
('Liberian Girl', 211.8, 'https://example.com/bad.mp3', NOW(), NOW(), 2, 4),
('Just Good Friends', 244.2, 'https://example.com/bad.mp3', NOW(), NOW(), 2, 4),
('Another Part of Me', 213, 'https://example.com/bad.mp3', NOW(), NOW(), 2, 4),
('Man in The Mirror', 311.4, 'https://example.com/bad.mp3', NOW(), NOW(), 2, 4),
('I Just Cant Stop Loving You', 247.2, 'https://example.com/bad.mp3', NOW(), NOW(), 2, 4),
('Dirty Diana', 264.6, 'https://example.com/bad.mp3', NOW(), NOW(), 2, 4),
('Leave Me Alone', 264.6, 'https://example.com/bad.mp3', NOW(), NOW(), 2, 4),



-- Músicas de "A Night at the Opera" (Queen, album_id: 5, artista_id: 3)
('Bohemian Rhapsody', 333, 'link', NOW(), NOW(), 3, 5),
('Love of My Life', 202.8, 'link', NOW(), NOW(), 3, 5),
('Youre My Best Friend', 150.6, 'link', NOW(), NOW(), 3, 5),
('Death on Two Legs', 206.4, 'link', NOW(), NOW(), 3, 5),
('Lazing on a Sunday Afternoon', 64.8, 'link', NOW(), NOW(), 3, 5),
('Im in Love With My Car', 183, 'link', NOW(), NOW(), 3, 5),
('39', 198.6, 'link', NOW(), NOW(), 3, 5),
('Sweet Lady', 241.8, 'https://example.com/youremybestfriend.mp3', NOW(), NOW(), 3, 5),
('Seaside Rendezvous', 129, 'https://example.com/youremybestfriend.mp3', NOW(), NOW(), 3, 5),
('The Prophets Song', 492.6, 'https://example.com/youremybestfriend.mp3', NOW(), NOW(), 3, 5),
('Goob Company', 194.4, 'https://example.com/youremybestfriend.mp3', NOW(), NOW(), 3, 5),
('God Save the Queen', 69.6, 'https://example.com/youremybestfriend.mp3', NOW(), NOW(), 3, 5),



-- Músicas de "News of The World" (Queen, album_id: 6, artista_id: 3)
('We Will Rock You', 122, 'link', NOW(), NOW(), 3, 6),
('We Are The Champions', 179, 'link', NOW(), NOW(), 3, 6),
('Sheer Heart Attack', 202, 'link', NOW(), NOW(), 3, 6),
('All Dead, All Dead', 187, 'link', NOW(), NOW(), 3, 6),
('Spread Your Wings', 271, 'link', NOW(), NOW(), 3, 6),
('Fight From The Inside', 204, 'link', NOW(), NOW(), 3, 6),
('Get Down, Make Love', 229, 'link', NOW(), NOW(), 3, 6),
('Sleeping On The Sidewalk', 204, 'link', NOW(), NOW(), 3, 6),
('Who Needs You', 204, 'link', NOW(), NOW(), 3, 6),
('Its Late', 449, 'link', NOW(), NOW(), 3, 6),
('My Melancholy Blues', 217, 'link', NOW(), NOW(), 3, 6),


-- Músicas de "Roberto Carlos em Ritimo de Aventura" (Roberto Carlos, album_id: 7, artista_id: 4)

('Eu Sou Terrível', 172, 'link', NOW(), NOW(), 4, 7),
('Como É Grande O Meu Amor Por Você', 192, 'link', NOW(), NOW(), 4, 7),
('Por Isso Corro Demais', 176, 'link', NOW(), NOW(), 4, 7),
('Você Não Serve Pra Mim', 164, 'link', NOW(), NOW(), 4, 7),
('O Sósia', 135, 'link', NOW(), NOW(), 4, 7),
('É Preciso Saber Viver', 164, 'link', NOW(), NOW(), 4, 7),
('Quero Que Vá Tudo Pro Inferno', 162, 'link', NOW(), NOW(), 4, 7),
('Lobo Mau', 153, 'link', NOW(), NOW(), 4, 7),
('Namoradinha De Um Amigo Meu', 158, 'link', NOW(), NOW(), 4, 7),
('Só Vou Gostar De Quem Gosta De Mim', 150, 'link', NOW(), NOW(), 4, 7),
('Quando', 187, 'link', NOW(), NOW(), 4, 7),
('De Que Vale Tudo Isso', 176, 'link', NOW(), NOW(), 4, 7),


-- Músicas de "Detalhes" (Roberto Carlos, album_id: 8, artista_id: 4)

('Detalhes', 310, 'link', NOW(), NOW(), 4, 8),
('Como Dois E Dois', 194, 'link', NOW(), NOW(), 4, 8),
('A Namorada', 193, 'link', NOW(), NOW(), 4, 8),
('Todos Estão Surdos', 258, 'link', NOW(), NOW(), 4, 8),
('Debaixo Dos Caracóis Dos Seus Cabelos', 185, 'link', NOW(), NOW(), 4, 8),
('Se Eu Partir', 210, 'link', NOW(), NOW(), 4, 8),
('I Love You', 204, 'link', NOW(), NOW(), 4, 8),
('Amada Amante', 200, 'link', NOW(), NOW(), 4, 8),
('Traumas', 252, 'link', NOW(), NOW(), 4, 8),
('Meu Caminho', 195, 'link', NOW(), NOW(), 4, 8),
('Todos Estão Surdos (Versão Instrumental)', 255, 'link', NOW(), NOW(), 4, 8);








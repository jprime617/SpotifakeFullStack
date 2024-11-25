INSERT INTO artists (nome, bio, "imageUrl", "createdAt", "updatedAt") VALUES
('Yung Lixo', 'Rapper brasileiro conhecido por suas letras irônicas e criativas.', 'https://example.com/yunglixo.jpg', NOW(), NOW()),
('Michael Jackson', 'Conhecido como o Rei do Pop, Michael Jackson é um dos artistas mais influentes da música mundial.', 'https://example.com/michaeljackson.jpg', NOW(), NOW()),
('Queen', 'Banda britânica de rock formada em 1970, famosa por sucessos como "Bohemian Rhapsody" e "We Will Rock You".', 'https://example.com/queen.jpg', NOW(), NOW()),
('Roberto Carlos', 'Cantor e compositor brasileiro, conhecido como o Rei da Música Romântica no Brasil.', 'https://example.com/robertocarlos.jpg', NOW(), NOW());

INSERT INTO albums (title, "releaseYear", "coverImageUrl", "createdAt", "updatedAt", "artista_id") VALUES
-- Yung Lixo
('Sucessos que Você Odeia', 2020, 'https://example.com/sucessosquevoceodeia.jpg', NOW(), NOW(), 1),
('Vade Mecum', 2018, 'https://example.com/vademecum.jpg', NOW(), NOW(), 1),

-- Michael Jackson
('Thriller', 1982, 'https://example.com/thriller.jpg', NOW(), NOW(), 2),
('Bad', 1987, 'https://example.com/bad.jpg', NOW(), NOW(), 2),

-- Queen
('A Night at the Opera', 1975, 'https://example.com/anightattheopera.jpg', NOW(), NOW(), 3),
('News of the World', 1977, 'https://example.com/newsoftheworld.jpg', NOW(), NOW(), 3),

-- Roberto Carlos
('Roberto Carlos em Ritmo de Aventura', 1967, 'https://example.com/emritmodeaventura.jpg', NOW(), NOW(), 4),
('Detalhes', 1971, 'https://example.com/detalhes.jpg', NOW(), NOW(), 4);




INSERT INTO musicas (titulo, duracao, "fileUrl", "createdAt", "updatedAt", artista_id, album_id) VALUES
-- Músicas de "Validation Deluxe" (Yung Lixo, album_id: 1, artista_id: 1)
('Sucesso FM', '79,2', 'https://example.com/cidadaodebem.mp3', NOW(), NOW(), 1, 1),
('Rumo Á Vitoria', '196,2', 'https://example.com/realtrap.mp3', NOW(), NOW(), 1, 1),
('Goddamn', '150', 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),
('I Walk', '182,4', 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),
('Waiting to Fly', '184,2', 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),
('Sonhar', '204,6', 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),
('Im in Love', '214,8', 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),
('For My Family', '212,4', 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),
('Going Home', '195', 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),
('The Lord and Me', '248,4', 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),
('Anjos da Guarda', '190,8', 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),
('We Gold', '214,2', 'https://example.com/damadanoite.mp3', NOW(), NOW(), 1, 1),


-- Músicas de "Bittersweat Memories" (Yung Lixo, album_id: 2, artista_id: 1)
('Saúde', '61,8', 'https://example.com/manualdogado.mp3', NOW(), NOW(), 1, 2),
('O filho Pródigo', '150,6', 'https://example.com/cringe.mp3', NOW(), NOW(), 1, 2),
('Let it Pour', '144,6', 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),
('The Story', '244,2', 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),
('Back Home', '199,8', 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),
('Melhor Não', '189,6', 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),
('Oldschool', '181,8', 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),
('Dirty Dancing', '195', 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),
('Prefiro Morrer', '150', 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),
('Quase Perfeito', '189,6', 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),
('Máquina do Tempo', '190,2', 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),
('Flores de Outro Canaval', '256,2', 'https://example.com/pazinterior.mp3', NOW(), NOW(), 1, 2),

-- Músicas de "Thriller" (Michael Jackson, album_id: 3, artista_id: 2)
('Thriller', '334,8', 'https://example.com/thriller.mp3', NOW(), NOW(), 2, 3),
('Beat It', '250,8', 'https://example.com/beatit.mp3', NOW(), NOW(), 2, 3),
('Billie Jean', '272,4', 'https://example.com/billiejean.mp3', NOW(), NOW(), 2, 3),
('Wanna be Startin’ Somethin’', '361,8', 'https://example.com/billiejean.mp3', NOW(), NOW(), 2, 3),
('Baby Be Mine', '252', 'https://example.com/billiejean.mp3', NOW(), NOW(), 2, 3),
('The Girl is Mine', '205,2', 'https://example.com/billiejean.mp3', NOW(), NOW(), 2, 3),
('Human Nature', '243,6', 'https://example.com/billiejean.mp3', NOW(), NOW(), 2, 3),
('P.Y.T', '215,4', 'https://example.com/billiejean.mp3', NOW(), NOW(), 2, 3),
('The Lady in My Life', '275,4', 'https://example.com/billiejean.mp3', NOW(), NOW(), 2, 3),

-- Músicas de "Bad" (Michael Jackson, album_id: 4, artista_id: 2)
('Smooth Criminal', '4:17', 'https://example.com/smoothcriminal.mp3', NOW(), NOW(), 2, 4),
('Bad', '4:07', 'https://example.com/bad.mp3', NOW(), NOW(), 2, 4),
('The Way You Make Me Feel', '4:58', 'https://example.com/thewayyoumakemefeel.mp3', NOW(), NOW(), 2, 4),

-- Músicas de "A Night at the Opera" (Queen, album_id: 5, artista_id: 3)
('Bohemian Rhapsody', '5:55', 'https://example.com/bohemianrhapsody.mp3', NOW(), NOW(), 3, 5),
('Love of My Life', '3:38', 'https://example.com/loveofmylife.mp3', NOW(), NOW(), 3, 5),
('You\'re My Best Friend', '2:50', 'https://example.com/youremybestfriend.mp3', NOW(), NOW(), 

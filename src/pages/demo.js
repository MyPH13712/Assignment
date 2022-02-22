<div class="max-w-5xl mx-auto">
                <div class="news">
                    <form id="formEditPost">
                        <input type="text" class="border border-black" id="title-post" placeholder="Title Post" value="${data.title}"/><br />
                        <img src="${data.img}" id="img-preview" />
                        <input type="file" class="border border-black" id="img-post" /> <br />
                        <textarea name="" class="border border-black" id="desc-post" cols="30" rows="10">${data.desc}</textarea> <br />
                        <button class="bg-blue-500 inline-block px-3 py-4">Add post</button>
                    </form>
                </div>
            </div>
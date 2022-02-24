<div class="max-w-5xl mx-auto">
                <div class="banner">
                ${Banner.render()}
                </div>
                <div class="news">
                    <table>
                        <thead>
                            <th>STT</th>
                            <th>Ảnh</th>
                            <th>Tiêu đề</th>
                            <th></th>
                        </thead>
                        <tbody>
                            ${response.data.map((post, index) => `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>
                                        <img src="${post.img}" alt="" width="50"/>
                                    </td>
                                    <td>
                                        <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">${post.title}</a></h3>
                                    </td>
                                    <td>
                                        <a href="/admin/posts/${post.id}/edit">Edit</a>
                                        <button data-id="${post.id}" class="btn bg-red-500 text-white inline-block py-3 px-5 rounded">Delete</button>
                                    </td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                    
                </div>
            </div>
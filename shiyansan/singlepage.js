// 显示指定页面并隐藏其他页面
function showSection(sectionId) {
    // 隐藏所有内容区域
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // 移除所有按钮的active类
    document.querySelectorAll('button').forEach(button => {
        button.classList.remove('active');
    });
    
    // 显示指定的内容区域
    document.getElementById(sectionId).style.display = 'block';
    
    // 为当前点击的按钮添加active类
    const activeButton = document.querySelector(`button[data-section="${sectionId}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 为所有按钮添加点击事件
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.dataset.section;
            showSection(sectionId);
        });
    });
    
    // 为第一个按钮添加active类
    document.querySelector('button:first-child').classList.add('active');
});
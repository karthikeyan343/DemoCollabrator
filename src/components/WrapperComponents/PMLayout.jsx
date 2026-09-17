import React, { useState, useMemo } from 'react'
import ProductNavBar from '../SpecifiedComponents/ProductManagement/ProductNavbar'
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Menu, MenuItem } from '@mui/material'
import ProductSidebar from '../SpecifiedComponents/ProductManagement/ProductSidebar'
import Searchbar from '../SpecifiedComponents/ProductManagement/Searchbar'
import ProductTable from '../SpecifiedComponents/ProductManagement/ProductTable'

const initialProducts = [
    { id: 1, name: 'Aashirvaad Atta 5kg', sku: 'GRO-001', barcode: '8901008000019', category: 'Groceries', price: 245.00, status: 'In Stock', count: 42 },
    { id: 2, name: 'Aavin Milk 500ml', sku: 'DAI-012', barcode: '8901008000020', category: 'Dairy', price: 25.00, status: 'Out of Stock', count: 0 },
    { id: 3, name: 'Britannia Bread 400g', sku: 'BAK-005', barcode: '8901008000037', category: 'Bakery', price: 40.00, status: 'Low Stock', count: 3 },
    { id: 4, name: 'Nescafe Classic 50g', sku: 'BEV-102', barcode: '8901008000142', category: 'Beverages', price: 160.00, status: 'In Stock', count: 45 },
    { id: 5, name: 'Tata Salt 1kg', sku: 'GRO-008', barcode: '8901008000551', category: 'Groceries', price: 28.00, status: 'In Stock', count: 120 },
    { id: 6, name: 'Farm Fresh Eggs 6pk', sku: 'DAI-019', barcode: '8901008000998', category: 'Dairy', price: 42.00, status: 'In Stock', count: 14 },
];

const PMLayout = () => {
    const [products, setProducts] = useState(initialProducts);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [selectedStockStatus, setSelectedStockStatus] = useState('Stock Status');
    
    // Add/Edit Modal States
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({ name: '', sku: '', price: '', category: 'Groceries', count: 10 });

    // More Filters States
    const [filterAnchorEl, setFilterAnchorEl] = useState(null);
    const [sortBy, setSortBy] = useState('Default');

    // Selection States for Bulk Actions
    const [selectedIds, setSelectedIds] = useState([]);

    const filteredProducts = useMemo(() => {
        let result = products.filter((product) => {
            const matchesSearch =
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.barcode.includes(searchQuery);

            const matchesCategory =
                selectedCategory === 'All Categories' || product.category === selectedCategory;

            const matchesStatus =
                selectedStockStatus === 'Stock Status' || product.status === selectedStockStatus;

            return matchesSearch && matchesCategory && matchesStatus;
        });

        if (sortBy === 'Price: Low to High') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'Price: High to Low') {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [products, searchQuery, selectedCategory, selectedStockStatus, sortBy]);

    const handleDelete = (id) => {
        setProducts(products.filter(p => p.id !== id));
        setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    };

    const handleBulkDelete = () => {
        setProducts(products.filter(p => !selectedIds.includes(p.id)));
        setSelectedIds([]);
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedIds(filteredProducts.map(p => p.id));
        } else {
            setSelectedIds([]);
        }
    };

    const handleSelectOne = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(item => item !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };

    const handleEditClick = (product) => {
        setEditingProduct(product);
        setFormData({ name: product.name, sku: product.sku, price: product.price, category: product.category, count: product.count });
        setIsAddOpen(true);
    };

    const handleSaveProduct = () => {
        if (editingProduct) {
            setProducts(products.map(p => p.id === editingProduct.id ? { ...p, ...formData, price: Number(formData.price) } : p));
        } else {
            const newProd = {
                id: Date.now(),
                ...formData,
                price: Number(formData.price),
                barcode: '8901' + Math.floor(100000000 + Math.random() * 900000000),
                status: Number(formData.count) > 0 ? 'In Stock' : 'Out of Stock'
            };
            setProducts([newProd, ...products]);
        }
        setIsAddOpen(false);
        setEditingProduct(null);
        setFormData({ name: '', sku: '', price: '', category: 'Groceries', count: 10 });
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            minHeight: '100vh',
            backgroundColor: '#f3f4f6',
            overflowX: 'hidden'
        }}>
            <Box sx={{ width: { xs: '100%', md: '260px' }, flexShrink: 0 }}>
                <ProductSidebar />
            </Box>

            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflowX: 'hidden' }}>
                <ProductNavBar 
                    onNotificationClick={() => alert('No new notifications')}
                    onSettingsClick={() => alert('Opening POS settings...')}
                    onLogoutClick={() => alert('Logging out session...')} 
                />

                <Box sx={{ p: { xs: 2, md: 3 } }}>
                    <Searchbar
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        selectedStockStatus={selectedStockStatus}
                        setSelectedStockStatus={setSelectedStockStatus}
                        onOpenAddModal={() => { setEditingProduct(null); setIsAddOpen(true); }}
                        onOpenFiltersModal={(e) => setFilterAnchorEl(e.currentTarget)}
                    />

                    <Box sx={{ mt: 3 }}>
                        <ProductTable 
                            products={filteredProducts} 
                            onEdit={handleEditClick}
                            onDelete={handleDelete}
                            selectedIds={selectedIds}
                            onSelectAll={handleSelectAll}
                            onSelectOne={handleSelectOne}
                            onBulkDelete={handleBulkDelete}
                        />
                    </Box>
                </Box>
            </Box>

            <Menu
                anchorEl={filterAnchorEl}
                open={Boolean(filterAnchorEl)}
                onClose={() => setFilterAnchorEl(null)}
            >
                <MenuItem disabled sx={{ fontWeight: 'bold', opacity: '1 !important' }}>Sort By</MenuItem>
                <MenuItem onClick={() => { setSortBy('Default'); setFilterAnchorEl(null); }}>Default Order</MenuItem>
                <MenuItem onClick={() => { setSortBy('Price: Low to High'); setFilterAnchorEl(null); }}>Price: Low to High</MenuItem>
                <MenuItem onClick={() => { setSortBy('Price: High to Low'); setFilterAnchorEl(null); }}>Price: High to Low</MenuItem>
            </Menu>

            <Dialog open={isAddOpen} onClose={() => setIsAddOpen(false)}>
                <DialogTitle>{editingProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
                <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1, minWidth: '400px' }}>
                    <TextField label="Product Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} fullWidth />
                    <TextField label="SKU" value={formData.sku} onChange={(e) => setFormData({...formData, sku: e.target.value})} fullWidth />
                    <TextField label="Price (₹)" type="number" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} fullWidth />
                    <TextField label="Stock Count" type="number" value={formData.count} onChange={(e) => setFormData({...formData, count: e.target.value})} fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsAddOpen(false)}>Cancel</Button>
                    <Button variant="contained" onClick={handleSaveProduct}>{editingProduct ? 'Save Changes' : 'Add Product'}</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default PMLayout
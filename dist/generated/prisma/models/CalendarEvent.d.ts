import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CalendarEventModel = runtime.Types.Result.DefaultSelection<Prisma.$CalendarEventPayload>;
export type AggregateCalendarEvent = {
    _count: CalendarEventCountAggregateOutputType | null;
    _min: CalendarEventMinAggregateOutputType | null;
    _max: CalendarEventMaxAggregateOutputType | null;
};
export type CalendarEventMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    date: string | null;
    time: string | null;
    category: $Enums.EventCategory | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CalendarEventMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    date: string | null;
    time: string | null;
    category: $Enums.EventCategory | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CalendarEventCountAggregateOutputType = {
    id: number;
    title: number;
    date: number;
    time: number;
    category: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CalendarEventMinAggregateInputType = {
    id?: true;
    title?: true;
    date?: true;
    time?: true;
    category?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CalendarEventMaxAggregateInputType = {
    id?: true;
    title?: true;
    date?: true;
    time?: true;
    category?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CalendarEventCountAggregateInputType = {
    id?: true;
    title?: true;
    date?: true;
    time?: true;
    category?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CalendarEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarEventWhereInput;
    orderBy?: Prisma.CalendarEventOrderByWithRelationInput | Prisma.CalendarEventOrderByWithRelationInput[];
    cursor?: Prisma.CalendarEventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CalendarEventCountAggregateInputType;
    _min?: CalendarEventMinAggregateInputType;
    _max?: CalendarEventMaxAggregateInputType;
};
export type GetCalendarEventAggregateType<T extends CalendarEventAggregateArgs> = {
    [P in keyof T & keyof AggregateCalendarEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCalendarEvent[P]> : Prisma.GetScalarType<T[P], AggregateCalendarEvent[P]>;
};
export type CalendarEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarEventWhereInput;
    orderBy?: Prisma.CalendarEventOrderByWithAggregationInput | Prisma.CalendarEventOrderByWithAggregationInput[];
    by: Prisma.CalendarEventScalarFieldEnum[] | Prisma.CalendarEventScalarFieldEnum;
    having?: Prisma.CalendarEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CalendarEventCountAggregateInputType | true;
    _min?: CalendarEventMinAggregateInputType;
    _max?: CalendarEventMaxAggregateInputType;
};
export type CalendarEventGroupByOutputType = {
    id: string;
    title: string;
    date: string;
    time: string | null;
    category: $Enums.EventCategory;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CalendarEventCountAggregateOutputType | null;
    _min: CalendarEventMinAggregateOutputType | null;
    _max: CalendarEventMaxAggregateOutputType | null;
};
type GetCalendarEventGroupByPayload<T extends CalendarEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CalendarEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CalendarEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CalendarEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CalendarEventGroupByOutputType[P]>;
}>>;
export type CalendarEventWhereInput = {
    AND?: Prisma.CalendarEventWhereInput | Prisma.CalendarEventWhereInput[];
    OR?: Prisma.CalendarEventWhereInput[];
    NOT?: Prisma.CalendarEventWhereInput | Prisma.CalendarEventWhereInput[];
    id?: Prisma.StringFilter<"CalendarEvent"> | string;
    title?: Prisma.StringFilter<"CalendarEvent"> | string;
    date?: Prisma.StringFilter<"CalendarEvent"> | string;
    time?: Prisma.StringNullableFilter<"CalendarEvent"> | string | null;
    category?: Prisma.EnumEventCategoryFilter<"CalendarEvent"> | $Enums.EventCategory;
    description?: Prisma.StringNullableFilter<"CalendarEvent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CalendarEvent"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CalendarEvent"> | Date | string;
};
export type CalendarEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    time?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CalendarEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CalendarEventWhereInput | Prisma.CalendarEventWhereInput[];
    OR?: Prisma.CalendarEventWhereInput[];
    NOT?: Prisma.CalendarEventWhereInput | Prisma.CalendarEventWhereInput[];
    title?: Prisma.StringFilter<"CalendarEvent"> | string;
    date?: Prisma.StringFilter<"CalendarEvent"> | string;
    time?: Prisma.StringNullableFilter<"CalendarEvent"> | string | null;
    category?: Prisma.EnumEventCategoryFilter<"CalendarEvent"> | $Enums.EventCategory;
    description?: Prisma.StringNullableFilter<"CalendarEvent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CalendarEvent"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"CalendarEvent"> | Date | string;
}, "id">;
export type CalendarEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    time?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CalendarEventCountOrderByAggregateInput;
    _max?: Prisma.CalendarEventMaxOrderByAggregateInput;
    _min?: Prisma.CalendarEventMinOrderByAggregateInput;
};
export type CalendarEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.CalendarEventScalarWhereWithAggregatesInput | Prisma.CalendarEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.CalendarEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CalendarEventScalarWhereWithAggregatesInput | Prisma.CalendarEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CalendarEvent"> | string;
    title?: Prisma.StringWithAggregatesFilter<"CalendarEvent"> | string;
    date?: Prisma.StringWithAggregatesFilter<"CalendarEvent"> | string;
    time?: Prisma.StringNullableWithAggregatesFilter<"CalendarEvent"> | string | null;
    category?: Prisma.EnumEventCategoryWithAggregatesFilter<"CalendarEvent"> | $Enums.EventCategory;
    description?: Prisma.StringNullableWithAggregatesFilter<"CalendarEvent"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CalendarEvent"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"CalendarEvent"> | Date | string;
};
export type CalendarEventCreateInput = {
    id?: string;
    title: string;
    date: string;
    time?: string | null;
    category: $Enums.EventCategory;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CalendarEventUncheckedCreateInput = {
    id?: string;
    title: string;
    date: string;
    time?: string | null;
    category: $Enums.EventCategory;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CalendarEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarEventCreateManyInput = {
    id?: string;
    title: string;
    date: string;
    time?: string | null;
    category: $Enums.EventCategory;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CalendarEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.StringFieldUpdateOperationsInput | string;
    time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalendarEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CalendarEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CalendarEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    time?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumEventCategoryFieldUpdateOperationsInput = {
    set?: $Enums.EventCategory;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type CalendarEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    date?: boolean;
    time?: boolean;
    category?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["calendarEvent"]>;
export type CalendarEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    date?: boolean;
    time?: boolean;
    category?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["calendarEvent"]>;
export type CalendarEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    date?: boolean;
    time?: boolean;
    category?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["calendarEvent"]>;
export type CalendarEventSelectScalar = {
    id?: boolean;
    title?: boolean;
    date?: boolean;
    time?: boolean;
    category?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CalendarEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "date" | "time" | "category" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["calendarEvent"]>;
export type $CalendarEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CalendarEvent";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        date: string;
        time: string | null;
        category: $Enums.EventCategory;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["calendarEvent"]>;
    composites: {};
};
export type CalendarEventGetPayload<S extends boolean | null | undefined | CalendarEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CalendarEventPayload, S>;
export type CalendarEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CalendarEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CalendarEventCountAggregateInputType | true;
};
export interface CalendarEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CalendarEvent'];
        meta: {
            name: 'CalendarEvent';
        };
    };
    findUnique<T extends CalendarEventFindUniqueArgs>(args: Prisma.SelectSubset<T, CalendarEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CalendarEventClient<runtime.Types.Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CalendarEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CalendarEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CalendarEventClient<runtime.Types.Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CalendarEventFindFirstArgs>(args?: Prisma.SelectSubset<T, CalendarEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__CalendarEventClient<runtime.Types.Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CalendarEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CalendarEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CalendarEventClient<runtime.Types.Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CalendarEventFindManyArgs>(args?: Prisma.SelectSubset<T, CalendarEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CalendarEventCreateArgs>(args: Prisma.SelectSubset<T, CalendarEventCreateArgs<ExtArgs>>): Prisma.Prisma__CalendarEventClient<runtime.Types.Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CalendarEventCreateManyArgs>(args?: Prisma.SelectSubset<T, CalendarEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CalendarEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CalendarEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CalendarEventDeleteArgs>(args: Prisma.SelectSubset<T, CalendarEventDeleteArgs<ExtArgs>>): Prisma.Prisma__CalendarEventClient<runtime.Types.Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CalendarEventUpdateArgs>(args: Prisma.SelectSubset<T, CalendarEventUpdateArgs<ExtArgs>>): Prisma.Prisma__CalendarEventClient<runtime.Types.Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CalendarEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, CalendarEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CalendarEventUpdateManyArgs>(args: Prisma.SelectSubset<T, CalendarEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CalendarEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CalendarEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CalendarEventUpsertArgs>(args: Prisma.SelectSubset<T, CalendarEventUpsertArgs<ExtArgs>>): Prisma.Prisma__CalendarEventClient<runtime.Types.Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CalendarEventCountArgs>(args?: Prisma.Subset<T, CalendarEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CalendarEventCountAggregateOutputType> : number>;
    aggregate<T extends CalendarEventAggregateArgs>(args: Prisma.Subset<T, CalendarEventAggregateArgs>): Prisma.PrismaPromise<GetCalendarEventAggregateType<T>>;
    groupBy<T extends CalendarEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CalendarEventGroupByArgs['orderBy'];
    } : {
        orderBy?: CalendarEventGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CalendarEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CalendarEventFieldRefs;
}
export interface Prisma__CalendarEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CalendarEventFieldRefs {
    readonly id: Prisma.FieldRef<"CalendarEvent", 'String'>;
    readonly title: Prisma.FieldRef<"CalendarEvent", 'String'>;
    readonly date: Prisma.FieldRef<"CalendarEvent", 'String'>;
    readonly time: Prisma.FieldRef<"CalendarEvent", 'String'>;
    readonly category: Prisma.FieldRef<"CalendarEvent", 'EventCategory'>;
    readonly description: Prisma.FieldRef<"CalendarEvent", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CalendarEvent", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"CalendarEvent", 'DateTime'>;
}
export type CalendarEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.CalendarEventOmit<ExtArgs> | null;
    where: Prisma.CalendarEventWhereUniqueInput;
};
export type CalendarEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.CalendarEventOmit<ExtArgs> | null;
    where: Prisma.CalendarEventWhereUniqueInput;
};
export type CalendarEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.CalendarEventOmit<ExtArgs> | null;
    where?: Prisma.CalendarEventWhereInput;
    orderBy?: Prisma.CalendarEventOrderByWithRelationInput | Prisma.CalendarEventOrderByWithRelationInput[];
    cursor?: Prisma.CalendarEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarEventScalarFieldEnum | Prisma.CalendarEventScalarFieldEnum[];
};
export type CalendarEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.CalendarEventOmit<ExtArgs> | null;
    where?: Prisma.CalendarEventWhereInput;
    orderBy?: Prisma.CalendarEventOrderByWithRelationInput | Prisma.CalendarEventOrderByWithRelationInput[];
    cursor?: Prisma.CalendarEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarEventScalarFieldEnum | Prisma.CalendarEventScalarFieldEnum[];
};
export type CalendarEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.CalendarEventOmit<ExtArgs> | null;
    where?: Prisma.CalendarEventWhereInput;
    orderBy?: Prisma.CalendarEventOrderByWithRelationInput | Prisma.CalendarEventOrderByWithRelationInput[];
    cursor?: Prisma.CalendarEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalendarEventScalarFieldEnum | Prisma.CalendarEventScalarFieldEnum[];
};
export type CalendarEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.CalendarEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalendarEventCreateInput, Prisma.CalendarEventUncheckedCreateInput>;
};
export type CalendarEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CalendarEventCreateManyInput | Prisma.CalendarEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CalendarEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CalendarEventOmit<ExtArgs> | null;
    data: Prisma.CalendarEventCreateManyInput | Prisma.CalendarEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CalendarEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.CalendarEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalendarEventUpdateInput, Prisma.CalendarEventUncheckedUpdateInput>;
    where: Prisma.CalendarEventWhereUniqueInput;
};
export type CalendarEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CalendarEventUpdateManyMutationInput, Prisma.CalendarEventUncheckedUpdateManyInput>;
    where?: Prisma.CalendarEventWhereInput;
    limit?: number;
};
export type CalendarEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CalendarEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalendarEventUpdateManyMutationInput, Prisma.CalendarEventUncheckedUpdateManyInput>;
    where?: Prisma.CalendarEventWhereInput;
    limit?: number;
};
export type CalendarEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.CalendarEventOmit<ExtArgs> | null;
    where: Prisma.CalendarEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.CalendarEventCreateInput, Prisma.CalendarEventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CalendarEventUpdateInput, Prisma.CalendarEventUncheckedUpdateInput>;
};
export type CalendarEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.CalendarEventOmit<ExtArgs> | null;
    where: Prisma.CalendarEventWhereUniqueInput;
};
export type CalendarEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalendarEventWhereInput;
    limit?: number;
};
export type CalendarEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalendarEventSelect<ExtArgs> | null;
    omit?: Prisma.CalendarEventOmit<ExtArgs> | null;
};
export {};
